import { registerUser } from "../../api/auth";
import { registerFormFields } from "../../data/authFormFields";
import useRegisterForm from "../../hooks/useRegisterForm";

import AuthForm from "../AuthForm/AuthForm";

const Register = () => {
  const registerTitle = "Зарегистрироваться";
  const { handleRegister } = registerUser();
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
