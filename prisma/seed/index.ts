import { db } from "../db";
import { seedDefaultUser } from "./user";

async function main() {
  await seedDefaultUser();
}

main()
  .then(async () => {
    await db.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await db.$disconnect();
    process.exit(1);
  });
