"use server";

import { db } from "../../prisma/db";

export async function getUsers() {
  return await db.user.findMany();
}

export async function createUser(data: {
  email: string;
  name: string;
  password: string;
}) {
  return await db.user.create({
    data,
  });
}
