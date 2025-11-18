import { Sneaker, User } from "@prisma/client";
import { db } from "../../src/lib/db";

export async function seedDefaultUser() {
  const mockedUser: User[] = [
    {
      id: "68adb1e60c2c50f13d0a64e4",
      email: "mockeduser@example.com",
      name: "Mocked User",
      password: "password123",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "68adb2600c2c50f13d0a64e5",
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

export async function seedDefaultSneakers() {
  const mockedSneakers: Sneaker[] = [
    {
      id: "68adb2f90c2c50f13d0a64e5",
      name: "Air Max 90",
      price: 120,
      description: "Classic Nike Air Max 90 sneakers",
      createdAt: new Date(),
      updatedAt: new Date(),
      imageUrl: "https://example.com/airmax90.jpg",
    },
    {
      id: "68adb30b0c2c50f13d0a64e6",
      name: "Adidas Ultraboost",
      price: 180,
      description: "Comfortable Adidas Ultraboost running shoes",
      createdAt: new Date(),
      updatedAt: new Date(),
      imageUrl: "https://example.com/ultraboost.jpg",
    },
  ];
  for (const sneakerData of mockedSneakers) {
    await db.sneaker.upsert({
      where: { id: sneakerData.id },
      update: {},
      create: sneakerData as any,
    });
  }
}
