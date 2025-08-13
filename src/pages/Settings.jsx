import usePageTitle from "../hooks/usePageTitle";
import PageWrapper from "../layouts/PageWrapper/PageWrapper";

const Settings = () => {
  usePageTitle("Настройки");

  return (
    <PageWrapper>
      <Content></Content>
    </PageWrapper>
  );
};

export default Settings;