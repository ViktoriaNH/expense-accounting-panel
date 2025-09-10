import { useState } from "react";
import { registerFormFields } from "../data/authFormFields";
import { useNavigate } from "react-router-dom";

const useRegisterForm = (handleRegister) => {
  const navigate = useNavigate();
  const [noticeMessage, setNoticeMessage] = useState("");
  const [noticeType, setNoticeType] = useState("");

  const handleSubmit = (e) => {
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
        setNoticeMessage("Регистрация прошла успешно!");
        setNoticeType("success");

        setTimeout(() => {
          navigate("/auth/login");
        }, 1000);
      })
      .catch((err) => {
        // ошибка
        if (err.message === "Username or email already exists") {
          setNoticeMessage("Такое имя пользователя или почта уже существует");
        } else {
          setNoticeMessage("Что-то пошло не так, попробуйте снова");
        }
        setNoticeType("error");
      });
  };

  return { handleSubmit, noticeMessage, noticeType };
};

export default useRegisterForm;