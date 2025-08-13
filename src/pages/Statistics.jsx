import usePageTitle from "../hooks/usePageTitle";
import PageWrapper from "../layouts/PageWrapper/PageWrapper";

const Statistics = () => {
  usePageTitle("Статистика");

  return (
    <PageWrapper>
      <Content></Content>
    </PageWrapper>
  );
};

export default Statistics;