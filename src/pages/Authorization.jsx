import usePageTitle from "../hooks/usePageTitle";
import Content from "../layouts/Content/Content";

import Welcome from "../sections/Welcome/Welcome";

const Authorization = () => {
  usePageTitle("Вход");

  return (
      <Content>
        <Welcome />
      </Content>
  );
};

export default Authorization;
