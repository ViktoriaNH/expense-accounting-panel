
import { registerFormFields } from "../../data/authFormFields";
import AuthForm from "../AuthForm/AuthForm";
import "./Register.scss";

const Register = (  ) => {
  const registerTitle = "Зарегистрироваться";

  return (
    <AuthForm
      title={registerTitle}
      fields={registerFormFields}
      submitText={registerTitle}
      notice={{
        text: "Уже есть аккаунт?",
        linkText: "Войдите",
         href: "/auth/login",
      }}
    />

  );
};

export default Register;