import { forgotPasswordFormFields } from "../../data/authFormFields";
import { useForgotPassword } from "../../hooks/useForgotPassword";
import AuthForm from "../AuthForm/AuthForm";

const ForgotPassword = () => {
  const forgotPasswordTitle = "Восстановить пароль";
  const { handleForgotPassword, noticeMessage, noticeType } =
    useForgotPassword();

  return (
    <AuthForm
      title={forgotPasswordTitle}
      fields={forgotPasswordFormFields}
      submitText={forgotPasswordTitle}
      onSubmit={handleForgotPassword} // обработчик клика
      notice={{
        text: noticeMessage || "Уже есть аккаунт?",
        linkText: noticeMessage ? "" : "Войдите",
        href: noticeMessage ? undefined : "/auth/login",
        type: noticeType,
      }}
    />
  );
};
export default ForgotPassword;
