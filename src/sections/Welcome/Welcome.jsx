import { useNavigate } from "react-router-dom";
import "./Welcome.scss";
import Button from "../../components/Button/Button";

const Welcome = () => {
  const titleId = "welcome-title";
  const navigate = useNavigate();

  const onLoginClick = () => {
    navigate("/auth/login");
  };

  const onRegisterClick = () => {
    navigate("/auth/register");
  };

    const onMyProfileClick = () => {
    navigate("/dashboard");
  };

  return (
    <section className="welcome " aria-labelledby={titleId}>
      <div className="welcome__inner container">
        <div className="welcome__identify">
          <h1 id={titleId}>Добро пожаловать в MoneyMap!</h1>
          <p>
            MoneyMap — ваш помощник в управлении финансами с наглядными отчётами, таблицами и графиками.
          </p>
        </div>

        <div className="welcome__description">
            <img
            src="/src/assets/images/main-img.webp"
            alt=""
            width="604"
            height="430"
            loading="eager"
          />
        </div>

        <div className="welcome__auth">
          <Button variant="login" submitText="Войти" onClick={onLoginClick} />
            <Button variant="register" submitText="Зарегистрироваться" onClick={onRegisterClick} />
            <Button variant="login" submitText="Продолжить без регистрации" onClick={onMyProfileClick} />
        </div>
      </div>
    </section>
  );
};

export default Welcome;


