import { forgotPasswordFormFields } from "../../data/authFormFields";
import { useForgotPassword } from "../../hooks/useForgotPassword";
import AuthForm from "../AuthForm/AuthForm";

const ForgotPassword = () => {
  const forgotPasswordTitle = "Восстановить пароль";
  const { handleForgotPassword } =
    useForgotPassword();

  return (
    <AuthForm
      title={forgotPasswordTitle}
      fields={forgotPasswordFormFields}
      submitText={forgotPasswordTitle}
      onSubmit={handleForgotPassword} // обработчик клика
      notice={{
        text: "Уже есть аккаунт?",
        linkText: "Войдите",
        href: "/auth/login",
      }}
    />
  );
};
export default ForgotPassword;
