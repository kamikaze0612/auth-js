import { auth } from "@/auth";

const DashboardPage: React.FC = async () => {
  const session = await auth();

  return <div>{JSON.stringify(session)}</div>;
};
export default DashboardPage;
