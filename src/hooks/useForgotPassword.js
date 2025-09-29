import { useNavigate } from "react-router-dom";
import { forgotPassword } from "../api/auth";

export const useForgotPassword = () => {
  const navigate = useNavigate();

  const handleForgotPassword = (e) => {
    e.preventDefault();
    // это событие - е - всегда получает обработчик в реакте

    let userEmail = "";
    // // Так как e.target — это <form>, мы можем напрямую работать со всеми её элементами
    //  // и получить емэйл из инпута вот так
    const emailInput = e.target.elements["email"];

    console.log("Email для отправки:", userEmail);

    if (emailInput) {
      userEmail = emailInput.value.trim();
    } else {
      userEmail = "undefined";
    }

    forgotPassword(userEmail).then((data) => {
      console.log("Ответ от сервера forgotPassword:", data);

      setTimeout(() => {
        navigate("/auth/reset-password");
      }, 3000);
    });
  };

      return { handleForgotPassword };
  // e.target — это сама форма (<form>) Почему?
  // Когда мы вешаем обработчик на форму, handleSubmit получает объект события e — это SubmitEvent,
  // который генерируется браузером.
  // У всех событий есть свойство target, которое указывает на элемент, который вызвал событие.
  // Для submit события:
  // target всегда ссылка на сам <form>, потому что именно форма инициирует submit.
  // Не кнопка, не инпут, а форма
};
