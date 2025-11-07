import { useNavigate } from "react-router-dom";
import { resetPasswordFormFields } from "../data/authFormFields";

const useResetPassword = (handleResetPass) => {
  const navigate = useNavigate();

  const handleSubmit = (e, setServerErrors) => {
    e.preventDefault(); // отменяем дефолтную презагрузку страницы

    // собираем данные из формы
    const formData = {};
    resetPasswordFormFields.forEach((field) => {
      formData[field.name] = e.target[field.name].value;
    });

    // отправляем запрос, использем объект из собранных полей
    handleResetPass(formData)
      .then(() => {
        // успех
        setTimeout(() => {
          navigate("/dashboard");
        }, 1000);
      })
      .catch((err) => {
        if (err.message === "Invalid credentials") {
          // ставим серверную ошибку именно под username или email
          setServerErrors({
            email: "Ошибка входа, проверьте корректность введенных данных",
            password: "Ошибка входа, проверьте корректность введенных данных",
          });
        }
      });
  };

  return { handleSubmit };
};

export default useResetPassword;
