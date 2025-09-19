export const validateInputs = (field, value, touched) => {
  let errorMessage = "";

  if (touched) {
    if (value.trim() === "") {
      errorMessage = "Поле не может быть пустым";
    } else if (field.id === "email" && !value.includes("@")) {
      errorMessage = "Введите корректный e-mail";
    } else if (field.id === "username" || field.id === "password") {
      // Только символы нельзя
      const usernameRegex = /^(?=.*[A-Za-zА-Яа-я0-9]).{6,}$/;
      if (!usernameRegex.test(value)) {
        errorMessage = "Введите корректное имя пользователя";
      }
    }
  }

  const hasError = Boolean(errorMessage || field.error); // булевое, есть ли ошибка вообще, серверная или локальная (что юзер ввел или не ввел)
  const message = errorMessage || field.error || ""; // field.error - будет серверная ошибка

  return { hasError, message };
};
