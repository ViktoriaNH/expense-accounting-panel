import usePageTitle from "../hooks/usePageTitle";
import PageWrapper from "../layouts/PageWrapper/PageWrapper";

const Dashboard = () => {
  usePageTitle("Главная панель");

  return (
    <PageWrapper>
      <Content></Content>
    </PageWrapper>
  );
};

export default Dashboard;
