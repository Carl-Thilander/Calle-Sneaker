import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

// src/app/[user]/page.tsx
type Props = PageProps<"/[user]">; // already declared globally

export default async function UserPage({ params }: Props) {
  const { user } = await params;
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/auth/login");
  }

  if (session.user?.name !== user) {
    return <div>You are not signed in</div>;
  }

  return (
    <div>
      <h1>Hej {session.user?.name ?? session.user?.email}</h1>
      <p>Här kan du se dina sparade designer, profilinställningar osv.</p>
    </div>
  );
}
