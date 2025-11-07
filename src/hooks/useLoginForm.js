import { useNavigate } from "react-router-dom";
import { loginFormFields } from "../data/authFormFields";

const useLoginForm = (handleLogin) => {
  const navigate = useNavigate();

  const handleSubmit = (e, setServerErrors, setFormStatus) => {
    e.preventDefault();

    // при начале отправки формы — показываем оверлей
    setFormStatus("disabled");

    const formData = {};

    loginFormFields.forEach((field) => {
      const input = e.target[field.name];
      formData[field.name] =
        input.type === "checkbox" ? input.checked : input.value;
    });

    handleLogin(formData.username, formData.password)
      .then(() => {
        // имитируем небольшую задержку перед переходом
        setFormStatus("success");
        setTimeout(() => {
          navigate("/dashboard");
        }, 1000);
      })
      .catch((err) => {
        setFormStatus("error");

        if (err.message === "Invalid credentials") {
          setServerErrors({
            username: "Ошибка входа, проверьте корректность введённых данных",
            password: "Ошибка входа, проверьте корректность введённых данных",
          });
        }
      })
  };

  return { handleSubmit };
};


export default useLoginForm;
