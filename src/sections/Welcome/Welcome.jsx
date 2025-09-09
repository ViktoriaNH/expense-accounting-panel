import { useNavigate } from "react-router-dom";
import "./Welcome.scss";

const Welcome = () => {
  const titleId = "welcome-title";
  const navigate = useNavigate();

  const onLoginClick = () => {
    navigate("/login");
  };

  const onRegisterClick = () => {
    navigate("/register");
  };

  return (
    <section className="welcome" aria-labelledby={titleId}>
      <div className="welcome__inner container">
        <div className="welcome__message">
          <p>Добро пожаловать!</p>
        </div>
        <div className="welcome__identify">
          <img
            src="/src/assets/icons/welcome-logo.svg"
            alt="Главный логотип"
            width="40"
            height="40"
            loading="eager"
          />
          <h1 id={titleId}>Панель учета расходов</h1>
          <p>
            Трать с умом. Отслеживай траты.
            <br /> Расслабься и наслаждайся.
          </p>
        </div>

        <div className="welcome__decription">
          Панель автоматически распределит расходы и построит отчёты <br />в
          графиках и таблицах.
        </div>

        <div className="welcome__auth">
          <button className="button button--login" onClick={onLoginClick}>
            Войти
          </button>
          <button className="button button--register" onClick={onRegisterClick}>
            Зарегистрироваться
          </button>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
