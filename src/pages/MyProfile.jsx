import usePageTitle from "../hooks/usePageTitle";
import Content from "../layouts/Content/Content";

const MyProfile = () => {
  usePageTitle("Мой профиль");

  return (
    <Content>
      <div>Страница в работе</div>
    </Content>
  );
};

export default MyProfile;
