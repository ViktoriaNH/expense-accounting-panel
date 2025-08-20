import { loginFormFields } from "../../data/authFormFields";
import AuthForm from "../AuthForm/AuthForm";
import "./Login.scss";

const Login = () => {
  const loginTitle = "Войти";

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
