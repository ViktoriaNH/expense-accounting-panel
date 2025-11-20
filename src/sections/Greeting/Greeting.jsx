import "./Greeting.scss";
import { useNavigate } from "react-router-dom";
import greetingImg from '../../assets/images/greeting-img.webp'
import Button from "./../../components/Button/index";


const Greeting = () => {
  const navigate = useNavigate();

  const greetingClick = () => {
    navigate("/add-operations");
  };
  return (
    <section className="greeting">
      <div className="greeting__container">
        <div className="greeting__content">
          <div className="greeting__text">
            <h1 className="greeting__title">Привет!</h1>
          <p className="greeting__subtitle">Рады видеть тебя в приложении</p>
          </div>
          
          <Button
            className="greeting__button"
            variant="addOperations"
            submitText="Внести операции"
            type="button"
            onClick={greetingClick}
          />
        </div>
 
      <div className="greeting__image">
          <img
            src={greetingImg}
            alt=""
            width="288"
            height="160"
            loading="eager"
          />
        </div> 
      </div>
    </section>
  );
};

export default Greeting;
