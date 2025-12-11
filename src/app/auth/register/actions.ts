"use server";

import { db } from "@/lib/db";
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

    console.log("registerUser data", { email, hasPassword: !!password });

    if (!email || !password) {
      console.log("registerUser validation failed");
      return { error: "email & password required" };
    }

    const existing = await db.user.findUnique({ where: { email } });
    console.log("registerUser existing user", !!existing);

    if (existing) {
      return { error: "User already exists" };
    }

    const hashed = await bcrypt.hash(password, 10);

    const created = await db.user.create({
      data: { email, name, password: hashed },
    });

    console.log("registerUser created user", created.id);

    return { success: true, email, password };
  } catch (err) {
    console.error("❌ registerUser error", err);
    return { error: "Server error" };
  }
}
