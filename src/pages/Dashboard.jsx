import usePageTitle from "../hooks/usePageTitle";
import Header from "../layouts/Header/Header";
import PageWrapper from "../layouts/PageWrapper";

const Dashboard = () => {
  usePageTitle("Главная панель");

  return (
    <div className="dashboard">
      <Header />
      <PageWrapper />
    </div>
  );
};

export default Dashboard;
