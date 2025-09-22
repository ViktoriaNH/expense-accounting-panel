import { useRegister } from "../../api/auth";
import { registerFormFields } from "../../data/authFormFields";
import useRegisterForm from "../../hooks/useRegisterForm";

import AuthForm from "../AuthForm/AuthForm";

const Register = () => {
  const registerTitle = "Зарегистрироваться";
  const { handleRegister } = useRegister();
  const { handleSubmit } = useRegisterForm(handleRegister);

  return (
    <AuthForm
      title={registerTitle}
      fields={registerFormFields}
      submitText={registerTitle}
      onSubmit={handleSubmit}
      notice={{
        text: "Уже есть аккаунт?",
        linkText: "Войдите",
        href: "/auth/login",
      }}
    />
  );
};

export default Register;
