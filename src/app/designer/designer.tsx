import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import DesignerClient from "./designer.client";

export default async function Designer() {
  const session = await getServerSession(authOptions);
  const isLoggedIn = !!session;

  return <DesignerClient isLoggedIn={isLoggedIn} mode="create" />;
}
