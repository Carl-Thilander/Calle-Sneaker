"use server";

import { db } from "@/lib/db";
import bcrypt from "bcryptjs";

export type RegisterResponse =
  | { error: string }
  | { success: true; email: string; password: string };

export async function registerUser(
  formData: FormData
): Promise<RegisterResponse> {
  const email = formData.get("email") as string;
  const name = formData.get("name") as string;
  const password = formData.get("password") as string;

  if (!email || !password) {
    return { error: "email & password are required" };
  }

  const existingUser = await db.user.findUnique({ where: { email } });
  if (existingUser) {
    return {
      error: "User with this email already exists, please choose another email",
    };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await db.user.create({
    data: {
      email,
      name,
      password: hashedPassword,
    },
  });

  return { success: true, email, password };
}
