export default async function UserPage() {
  // const { user } = await params;
  // const session = await getServerSession(authOptions);

  // if (!session) {
  //   redirect("/auth/login");
  // }

  // if (session.user?.name !== user) {
  //   return <div>You are not signed in</div>;
  // }

  return (
    <div>
      {/* <h1>Hej {session.user?.name ?? session.user?.email}</h1> */}
      <p>Här kan du se dina sparade designer, profilinställningar osv.</p>
    </div>
  );
}
