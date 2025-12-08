import { PrismaClient } from "@prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";
import "dotenv/config";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

const createDb = () => {
  const client = new PrismaClient({
    log: ["query", "error", "warn"],
    // Uncomment the next line after you have PRISMA_ACCELERATE_URL set
    // accelerateUrl: process.env.PRISMA_ACCELERATE_URL!,
  });

  // Only attach Accelerate when an accelerateUrl is available
  if (process.env.PRISMA_ACCELERATE_URL) {
    return client.$extends(withAccelerate()) as unknown as PrismaClient;
  }
  return client;
};

export const db = globalForPrisma.prisma ?? createDb();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = db;
}
