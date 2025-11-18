import { db } from "../../src/lib/db";
import { seedDefaultUser } from "./mockedData";

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
