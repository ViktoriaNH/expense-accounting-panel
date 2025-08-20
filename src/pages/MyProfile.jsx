import usePageTitle from "../hooks/usePageTitle";


const MyProfile = () => {
  usePageTitle("Мой профиль");

  return (
    <PageWrapper>
      <Content></Content>
    </PageWrapper>
  );
};

export default MyProfile;