import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { forgotPassword } from "../api/auth";

export const useForgotPassword = () => {
  const navigate = useNavigate();
  const [noticeMessage, setNoticeMessage] = useState("");
  const [noticeType, setNoticeType] = useState("");

  const handleForgotPassword = (e) => {
    e.preventDefault(); 
    // это событие - е - всегда получает обработчик в реакте

    let userEmail = "";
    // Так как e.target — это <form>, мы можем напрямую работать со всеми её элементами
     // и получить емэйл из инпута вот так
    const emailInput = e.target.elements["email"];

    if (emailInput) {
      userEmail = emailInput.value.trim();
    } else {
      userEmail = "undefined";
    }

console.log("Email для отправки:", userEmail);


    forgotPassword(userEmail)
      .then((data) => {
          console.log("Ответ от сервера forgotPassword:", data); 
        setNoticeMessage("Код для сброса пароля отправлен на Вашу почту");
        setNoticeType("success");

        setTimeout(() => {
          navigate("/auth/reset-password");
        }, 3000);
      })
      .catch((err) => {
          console.error("Ошибка forgotPassword:", err)
        setNoticeMessage(err.message || "Что-то пошло не так, попробуйте снова");
        setNoticeType("error");
      });
  };

  return { handleForgotPassword, noticeMessage, noticeType };
};

  // e.target — это сама форма (<form>) Почему?
  // Когда мы вешаем обработчик на форму, handleSubmit получает объект события e — это SubmitEvent,
  // который генерируется браузером.
  // У всех событий есть свойство target, которое указывает на элемент, который вызвал событие.
  // Для submit события:
  // target всегда ссылка на сам <form>, потому что именно форма инициирует submit.
  // Не кнопка, не инпут, а форма

