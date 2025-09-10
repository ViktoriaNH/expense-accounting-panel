import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginFormFields } from "../data/authFormFields";

// дублируется логика регистрации, во возможности сделать общий компонент

const useLoginForm = (handleLogin) => {
  // подход через универсальный параметр, чтобы жестко не привязываться к loginUser
  const navigate = useNavigate();
  const [noticeMessage, setNoticeMessage] = useState("");
  const [noticeType, setNoticeType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // отменяем дефолтную презагрузку страницы

    const formData = {};
    loginFormFields.forEach((field) => {
      formData[field.name] = e.target[field.name].value;
    });

    handleLogin(formData)
      .then(() => {
        // успех
        setNoticeMessage("Вход выполнен успешно!");
        setNoticeType("success");

        setTimeout(() => {
          navigate("/my-profile");
        }, 1000);
      })

      .catch((err) => {
        setNoticeMessage(err.message || "Неверный логин или пароль");
        setNoticeType("error");
      });
  };

  return { handleSubmit, noticeMessage, noticeType };
};

export default useLoginForm;
