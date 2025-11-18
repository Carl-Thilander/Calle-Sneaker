import { db } from "../db";

export async function seedDefaultUser() {
  const mockedUser = [
    {
      email: "mockeduser@example.com",
      name: "Mocked User",
      password: "password123",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      email: "anothermocked@email.se",
      name: "Another Mocked",
      password: "securepassword",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  for (const userData of mockedUser) {
    await db.user.upsert({
      where: { email: userData.email },
      update: {},
      create: userData as any,
    });
  }
}
