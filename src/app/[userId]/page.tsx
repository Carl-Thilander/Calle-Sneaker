import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { Container, Typography } from "@mui/material";

export default async function UserPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/auth/login");
  }

  return (
    <Container maxWidth="lg" style={{ padding: "2rem" }}>
      <Typography variant="h3">
        Hello {session.user?.name ?? session.user?.email}
      </Typography>
      <Typography variant="h5">
        Your saved designs will be displayed here
      </Typography>
    </Container>
  );
}
