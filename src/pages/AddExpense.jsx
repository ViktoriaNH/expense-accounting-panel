import usePageTitle from "../hooks/usePageTitle";
import PageWrapper from "../layouts/PageWrapper/PageWrapper";

const AddExpense = () => {
  usePageTitle("Добавить расходы");

  return (
    <PageWrapper>
      <Content></Content>
    </PageWrapper>
  );
};

export default AddExpense;