import { loginFormFields } from "../../data/authFormFields";
import AuthForm from "../AuthForm/AuthForm";
import "./Login.scss";

const Login = ({ onLogin }) => {
  const loginTitle = "Войти";

    const handleSubmit = (e) => {
    e.preventDefault();
    // здесь твоя валидация формы / API
    onLogin(); // помечаем пользователя как авторизованного
  };

  return (
    <AuthForm
      title={loginTitle}
      fields={loginFormFields}
      submitText={loginTitle}
      notice={{
        text: "Нет аккаунта?",
        linkText: "Зарегистрируйтесь",
       href: "/auth/register",
      }}
    />
  );
};

export default Login;
