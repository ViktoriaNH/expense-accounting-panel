import { registerFormFields } from "../data/authFormFields";
import { useNavigate } from "react-router-dom";

const useRegisterForm = (handleRegister) => {
  const navigate = useNavigate();

  const handleSubmit = (e, setServerErrors) => {
    e.preventDefault(); // отменяем дефолтную презагрузку страницы

    // собираем данные из формы
    const formData = {};
    registerFormFields.forEach((field) => {
      formData[field.name] = e.target[field.name].value;
    });

    // отправляем запрос, использем объект из собранных полей
    handleRegister(formData)
      .then(() => {
        // успех
        setTimeout(() => {
          navigate("/auth/login");
        }, 1000);
      })
      .catch((err) => {
        if (err.message === "Username or email already exists") {
          // ставим серверную ошибку именно под username или email
          setServerErrors({
            username: "Это Имя Пользователя уже используется",
            email: "Этот e-mail уже используется",
          });
        }
      });
  };

  return { handleSubmit };
};

export default useRegisterForm;
