import { registerFormFields } from "../../data/authFormFields";
import { useRegister } from "../../hooks/useRegister";
import useRegisterForm from "../../hooks/useRegisterForm";

import AuthForm from "../AuthForm/AuthForm";
import "./Register.scss";

const Register = () => {
  const registerTitle = "Зарегистрироваться";
  const { handleRegister } = useRegister();
  const { handleSubmit, noticeMessage, noticeType } =
    useRegisterForm(handleRegister);

  return (
    <AuthForm
      title={registerTitle}
      fields={registerFormFields}
      submitText={registerTitle}
      onSubmit={handleSubmit}
      notice={{
        text: noticeMessage || "Уже есть аккаунт?",
        linkText: noticeMessage ? "" : "Войдите",
        href: noticeMessage ? undefined : "/auth/login",
        type: noticeType,
      }}
    />
  );
};

export default Register;
