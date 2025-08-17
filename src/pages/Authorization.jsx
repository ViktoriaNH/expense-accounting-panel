import usePageTitle from "../hooks/usePageTitle";
import Content from "../layouts/Content/Content";

import AuthWrapper from "../sections/AuthWrapper/AuthWrapper";

const Authorization = () => {
  usePageTitle("Вход");

  return (
      <Content>
        <AuthWrapper />
      </Content>
  );
};

export default Authorization;
