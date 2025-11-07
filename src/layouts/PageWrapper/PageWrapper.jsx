import Content from "../Content/Content";
import Navigation from "../Navigation/Navigation";
import "./PageWrapper.scss";

const PageWrapper = () => (
  <div className="page-wrapper">
    <div className="page-wrapper__inner container ">
      <Navigation />
      <Content>// тут будут секции, aside</Content>
    </div>
  </div>
);

export default PageWrapper;
