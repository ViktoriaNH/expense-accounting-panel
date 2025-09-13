import { loginUser } from "../../api/auth";
import { loginFormFields } from "../../data/authFormFields";
import useLoginForm from "../../hooks/useLoginForm";
import AuthForm from "../AuthForm/AuthForm";

const Login = () => {
  const loginTitle = "Войти в аккаунт";
  const submitTitle = 'Войти';
  const { handleSubmit, noticeType, noticeMessage } = useLoginForm(loginUser);

  return (
    <AuthForm
      title={loginTitle}
      fields={loginFormFields}
      submitText={submitTitle}
      onSubmit={handleSubmit}
      notice={{
        text: noticeMessage || "Вы еще не зарегистрированы?",
        linkText: noticeMessage ? "" : "Регистрация",
        href: noticeMessage ? undefined : "/auth/register",
        type: noticeType,
      }}
    />
  );
};

export default Login;
