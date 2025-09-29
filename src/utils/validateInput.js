
export const validateInputs = (field, value, touched, serverError) => {
  let errorMessage = "";

  if (touched) {
    if (value.trim() === "") {
      errorMessage = "Поле не может быть пустым";
    } else if (field.id === "email" && !value.includes("@")) {
      errorMessage = "Введите корректный e-mail";
    } else if (field.id === "username") {
      // Только символы нельзя
      const usernameRegex = /^(?=.*[A-Za-zА-Яа-я0-9]).{6,}$/;
      if (!usernameRegex.test(value)) {
        errorMessage = "Введите корректное имя пользователя";
      }
    } else if (field.id === 'password' ) {
      if (value.length < 6) {
        errorMessage = 'Поле не может быть пустым'
      }

    }
  }

  const hasError = Boolean(errorMessage || serverError);
  const message = errorMessage || serverError || "";

  return { hasError, message };
};
