import { useState } from "react";
import { useNavigate } from "react-router-dom";

// дублируется логика регистрации, во возможности сделать общий компонент 

const useLoginForm = (handleLogin) => { // подход через универсальный параметр, чтобы жестко не привязываться к loginUser
  const navigate = useNavigate();
  const [noticeMessage, setNoticeMessage] = useState("");
  const [noticeType, setNoticeType] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const username = e.target.username.value;
    const password = e.target.password.value;

    try {
      await handleLogin(username, password);

      setNoticeMessage("Вход выполнен успешно!");
      setNoticeType("success");

      setTimeout(() => {
        navigate("/my-profile");
      }, 1000);
    } catch (err) {
      setNoticeMessage(err.message || "Неверный логин или пароль");
      setNoticeType("error");
    }
  };

  return { handleSubmit, noticeMessage, noticeType };
};

export default useLoginForm;