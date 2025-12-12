import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import { notFound, redirect } from "next/navigation";
import DesignerClient from "../designer.client";

type Props = {
  params: { designId: string };
};

export default async function DesignerEditPage({ params }: Props) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) redirect("/auth/login");

  const user = await db.user.findUnique({
    where: { email: session.user.email },
    select: { id: true, email: true, name: true },
  });
  if (!user) redirect("/auth/login");

  const design = await db.design.findUnique({
    where: { id: params.designId },
    select: {
      id: true,
      userId: true,
      name: true,
      config: true,
    },
  });

  if (!design) notFound();
  if (design.userId !== user.id) notFound();

  return <DesignerClient isLoggedIn={true} initialDesignId={design.id} />;
}
