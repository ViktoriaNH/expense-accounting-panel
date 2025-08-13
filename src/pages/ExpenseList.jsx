import usePageTitle from "../hooks/usePageTitle";
import PageWrapper from "../layouts/PageWrapper/PageWrapper";

const ExpenseList = () => {
  usePageTitle("Список расходов");

  return (
    <PageWrapper>
      <Content></Content>
    </PageWrapper>
  );
};

export default ExpenseList;