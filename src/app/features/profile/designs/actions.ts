"use server";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import type { SneakerConfig } from "@/app/features/designer/types";
import { db } from "@/lib/db";
import { Prisma } from "@prisma/client";
import { getServerSession } from "next-auth";

// SneakerConfig moved to designer/types.ts

async function getCurrentUser() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) return null;

  const user = await db.user.findUnique({
    where: { email: session.user.email },
  });
  return user;
}

//Create operation
export async function createDesign(input: {
  name: string;
  config: SneakerConfig;
}) {
  const user = await getCurrentUser();
  if (!user) return { error: "Not authenticated" };

  const design = await db.design.create({
    data: {
      userId: user.id,
      name: input.name,
      config: input.config as Prisma.InputJsonValue,
    },
  });
  return { success: true, design };
}

//Read operation for all personal designs
export async function getMyDesigns() {
  const user = await getCurrentUser();
  if (!user) return { error: "Not authenticated" };

  const designs = await db.design.findMany({
    where: { userId: user.id },
    orderBy: { createdAt: "desc" },
  });
  return { success: true, designs };
}

//Read operations for a single design
export async function getMyDesignId(id: string) {
  const user = await getCurrentUser();
  if (!user) return { error: "Not authenticated" };
  const design = await db.design.findUnique({
    where: { id },
  });
  if (!design || design.userId !== user.id) {
    return { error: "Design not found" };
  }
  return { success: true, design };
}

//Update operation for a design
export async function updateDesign(input: {
  id: string;
  name?: string;
  config?: SneakerConfig;
}) {
  const user = await getCurrentUser();
  if (!user) return { error: "Not authenticated" };

  if (!input?.id) return { error: "Missing id" };

  const existing = await db.design.findUnique({ where: { id: input.id } });
  if (!existing || existing.userId !== user.id) {
    return { error: "Not found" };
  }

  // If config is provided use it, otherwise fall back to existing.config
  const configToSave: Prisma.InputJsonValue = (input.config ??
    existing.config ??
    {}) as Prisma.InputJsonValue;

  const design = await db.design.update({
    where: { id: input.id },
    data: {
      name: input.name ?? existing.name,
      config: configToSave,
    },
  });

  return { success: true, design };
}

//Delete operation for a design
export async function deleteDesign(id: string) {
  const user = await getCurrentUser();
  if (!user) return { error: "Not authenticated" };

  const existing = await db.design.findUnique({ where: { id } });
  if (!existing || existing.userId !== user.id) {
    return { error: "Not found" };
  }

  await db.design.delete({ where: { id } });

  return { success: true };
}
