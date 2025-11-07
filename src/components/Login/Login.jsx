import { loginFormFields } from "../../data/authFormFields";
import useLoginForm from "../../hooks/useLoginForm";
import AuthForm from "../AuthForm/AuthForm";
import { loginUser } from "../../api/auth";

const Login = () => {
  const loginTitle = "Войти в аккаунт";
  const submitTitle = "Войти";
  const { handleSubmit } = useLoginForm(loginUser);

  return (

  <main>
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
     //  {/* <div className="auth__image">
      //   <img src={formsImg} width={604} />
      // </div> */}
  </main>
    

    
  );
};

export default Login;
