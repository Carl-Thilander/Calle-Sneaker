import { User } from "@/generated/client";
import { db } from "../db";

export async function seedDefaultUser() {
  const mockedUser: User[] = [
    {
      email: "mockeduser@example.com",
      name: "Mocked User",
      password: "password123",
      id: "",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];
  for (const userData of mockedUser) {
    await db.user.upsert({
      where: { email: userData.email },
      update: {},
      create: userData,
    });
  }
}
