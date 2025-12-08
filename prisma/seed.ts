import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.upsert({
    where: { email: "mockeduser@example.com" },
    update: {},
    create: {
      email: "mockeduser@example.com",
      name: "Mocked User",
      password: "password123",
    },
  });

  await prisma.sneaker.upsert({
    where: { name: "Air Max 90" },
    update: {},
    create: {
      name: "Air Max 90",
      description: "Classic sneaker",
      config: {},
    },
  });
}

main()
  .then(() => {
    console.log("🌱 Seed completed successfully");
  })
  .catch((e) => {
    console.error("❌ Seed error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
