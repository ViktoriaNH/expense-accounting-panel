import { useNavigate } from "react-router-dom";
import { loginFormFields } from "../data/authFormFields";

// дублируется логика регистрации, во возможности сделать общий компонент

const useLoginForm = (handleLogin) => {
  // подход через универсальный параметр, чтобы жестко не привязываться к loginUser
  const navigate = useNavigate();

  const handleSubmit = (e, setServerErrors) => {
    e.preventDefault(); // отменяем дефолтную презагрузку страницы

    const formData = {};
    // loginFormFields.forEach((field) => {
    //   formData[field.name] = e.target[field.name].value;
    // });

    loginFormFields.forEach((field) => {
  const input = e.target[field.name];
  if (input.type === "checkbox") {
    formData[field.name] = input.checked;
  } else {
    formData[field.name] = input.value;
  }
});

    handleLogin(formData.username, formData.password)
      .then(() => {
        setTimeout(() => {
          navigate("/my-profile");
        }, 1000);
      })
.catch((err) => {
        if (err.message === "Invalid credentials") {
          // ставим серверную ошибку именно под username или email
          setServerErrors({
            username: "Ошибка входа, проверьте корректность введенных данных",
            password: "Ошибка входа, проверьте корректность введенных данных",
          });
        }
      });
  
  };

  return { handleSubmit };
};

export default useLoginForm;
