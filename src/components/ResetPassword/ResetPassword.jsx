import { useNavigate } from "react-router-dom";
import { resetPasswordFormFields } from "../../data/authFormFields";
import AuthForm from "../AuthForm/AuthForm";

const ResetPassword = () => {
  const resetPasswordTitle = "Сброс пароля";
  const navigate = useNavigate();

  const handleResetPassword = () => {
    navigate("/dashboard");
  };

  return (
    <AuthForm
      title={resetPasswordTitle}
      fields={resetPasswordFormFields}
      submitText={resetPasswordTitle}
      onSubmit={handleResetPassword}
      notice={{
        text: "Уже есть аккаунт?",
        linkText: "Войдите",
        href: "/auth/login",
      }}
    />
  );
};

export default ResetPassword;
