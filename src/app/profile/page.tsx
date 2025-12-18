import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { db } from "@/lib/db";
import { Box, Container, Typography } from "@mui/material";
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
  const username =
    user.name ?? session.user?.name ?? session.user?.email ?? user.email;

  return (
    <Box sx={{ py: { xs: 6, md: 10 } }}>
      <Container
        maxWidth="lg"
        sx={{
          padding: "2rem",
          backgroundColor: "background.paper",
          borderRadius: 2,
          boxShadow: 3,
          mb: 4,
        }}
      >
        <Typography variant="h1">
          Hello {session.user?.name ?? session.user?.email}
        </Typography>
        <Typography variant="h5">
          Your saved designs will be displayed here
        </Typography>
        <ProfileDesignList
          initialDesigns={designs}
          currentUser={{ id: user.id, username }}
        />
      </Container>
    </Box>
  );
}
