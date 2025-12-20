import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const mockedUsers = [
    {
      email: "mockeduser@example.com",
      name: "Mocked User",
      password: "password123",
    },
    {
      email: "anothermocked@email.se",
      name: "Another Mocked",
      password: "securepassword",
    },
    {
      email: "athirdmocked@email.se",
      name: "Johnson Mocked",
      password: "securerpassword",
    },
  ];

  for (const user of mockedUsers) {
    const hashedPassword = await bcrypt.hash(user.password, 10);

    await prisma.user.upsert({
      where: { email: user.email },
      update: {
        name: user.name,
        password: hashedPassword,
      },
      create: {
        email: user.email,
        name: user.name,
        password: hashedPassword,
      },
    });
  }

  const mockedSneakers = [
    {
      name: "Air Max 90",
      config: {},
      id: "",
      createdAt: "",
      updatedAt: "",
    },
    {
      name: "Adidas Ultraboost",
      config: {},
      id: "",
      createdAt: "",
      updatedAt: "",
    },
  ];
}

main()
  .then(() => {
    console.log("🌱 Seed completed successfully");
  })
  .catch(async (e) => {
    console.error("❌ Seed error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
