import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { db } from "@/lib/db";
import { Container, Typography } from "@mui/material";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import ProfileDesignList from "./profileDesignList";

export default async function UserPage() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    redirect("/auth/login");
  }
  const user = await db.user.findUnique({
    where: { email: session.user.email },
  });
  if (!user) redirect("/auth/login");
  const designs = await db.design.findMany({
    where: { userId: user.id },
    orderBy: { createdAt: "desc" },
  });

  return (
    <Container maxWidth="lg" style={{ padding: "2rem" }}>
      <Typography variant="h3">
        Hello {session.user?.name ?? session.user?.email}
      </Typography>
      <Typography variant="h5">
        Your saved designs will be displayed here later on
      </Typography>
      <ProfileDesignList initialDesigns={designs} />
    </Container>
  );
}
