import { useState } from "react";
import { registerFormFields } from "../data/authFormFields";
import { Navigate, useNavigate } from "react-router-dom";

const useRegisterForm = (handleRegister) => {
  const navigate = useNavigate();
  const [noticeMessage, setNoticeMessage] = useState("");

  const [noticeType, setNoticeType] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {};
    registerFormFields.forEach((field) => {
      formData[field.name] = e.target[field.name].value;
    });

    try {
      await handleRegister(formData);

      setNoticeMessage("Регистрация прошла успешно!");
      setNoticeType("success");

      setTimeout(() => {
        navigate("/auth/login"); 
      }, 1000);
    } catch (err) {
      if (err.message === "Username or email already exists") {
        setNoticeMessage("Такое имя пользователя или почта уже существует");
      } else {
        setNoticeMessage("Что-то пошло не так, попробуйте снова");
      }
      setNoticeType("error");
    }
  };

  return { handleSubmit, noticeMessage, noticeType };
};

export default useRegisterForm;
