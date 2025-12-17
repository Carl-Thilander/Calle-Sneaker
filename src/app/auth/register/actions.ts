"use server";

import { db } from "@/lib/db";
import { registerSchema } from "@/lib/validation";
import bcrypt from "bcryptjs";

export type RegisterResponse =
  | { error: string }
  | { success: true; email: string; password: string };

export async function registerUser(
  formData: FormData
): Promise<RegisterResponse> {
  try {
    console.log("➡️ registerUser called");

    const email = formData.get("email") as string;
    const name = formData.get("name") as string;
    const password = formData.get("password") as string;

    const parseResult = registerSchema.safeParse({
      email,
      name,
      password,
    });

    console.log("registerUser data", { email, hasPassword: !!password });

    if (!parseResult.success) {
      const firstError = parseResult.error.issues[0];
      return { error: firstError?.message || "Invalid input data" };
    }

    const existing = await db.user.findUnique({
      where: { email },
      select: { id: true },
    });
    console.log("registerUser existing user", !!existing);

    if (existing) {
      return { error: "User already exists" };
    }

    const hashed = await bcrypt.hash(password, 10);

    await db.user.create({
      data: {
        name: parseResult.data.name,
        email: parseResult.data.email,
        password: hashed,
      },
    });

    return { success: true, email, password };
  } catch (err) {
    console.error("❌ registerUser error", err);
    return { error: "Server error" };
  }
}
