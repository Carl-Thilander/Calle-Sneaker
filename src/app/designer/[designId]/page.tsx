import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { SneakerConfig } from "@/app/profile/designs/actions";
import { db } from "@/lib/db";
import { Container, Typography } from "@mui/material";
import { getServerSession } from "next-auth";
import { notFound, redirect } from "next/navigation";
import DesignerClient from "../designer.client";

interface Props {
  params: { designId: string } | Promise<{ designId: string }>;
}

export default async function DesignerEditPage({ params }: Props) {
  // `params` may be a Promise in Next's streaming behavior; await it to get
  // the actual object that contains `designId`.
  const resolvedParams = await params;
  const designId = resolvedParams?.designId;
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) redirect("/auth/login");

  const user = await db.user.findUnique({
    where: { email: session.user.email },
    select: { id: true, email: true, name: true },
  });
  if (!user) redirect("/auth/login");

  // Validate the incoming param before calling Prisma.
  if (!designId || typeof designId !== "string") notFound();

  const design = await db.design.findUnique({
    where: { id: designId },
    select: {
      id: true,
      userId: true,
      name: true,
      config: true,
    },
  });

  if (!design) notFound();
  if (design.userId !== user.id) notFound();

  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom px={3}>
          Currently editing: {design.name}
        </Typography>
        <DesignerClient
          isLoggedIn={true}
          initialDesignId={design.id}
          initialName={design.name}
          initialConfig={design.config as SneakerConfig}
        />
      </Container>
    </>
  );
}
