import { loginFormFields } from "../../data/authFormFields";
import useLoginForm from "../../hooks/useLoginForm";
import AuthForm from "../AuthForm/AuthForm";
import { loginUser } from "../../api/auth";

const Login = () => {
  const loginTitle = "Войти в аккаунт";
  const submitTitle = "Войти";
  const { handleSubmit } = useLoginForm(loginUser);

  return (
    <AuthForm
      title={loginTitle}
      fields={loginFormFields}
      submitText={submitTitle}
      onSubmit={handleSubmit}
      notice={{
        text: "Вы еще не зарегистрированы?",
        linkText: "Регистрация",
        href: "/auth/register",
      }}
    />
  );
};
// const Login = () => {
//   const loginTitle = "Войти в аккаунт";
//   const submitTitle = "Войти";
//   const { handleSubmit } = useLoginForm(loginUser);

//   return (
//     <AuthForm
//       title={loginTitle}
//       fields={loginFormFields}
//       submitText={submitTitle}
//       onSubmit={handleSubmit}
//       notice={{
//         text: "Вы еще не зарегистрированы?",
//         linkText: "Регистрация",
//         href: "/auth/register",
//       }}
//     />
//   );
// };
export default Login;
