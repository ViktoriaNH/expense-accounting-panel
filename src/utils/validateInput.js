export const validateInputs = (field, value, touched) => {
  let errorMessage = "";

  if (touched) {
    if (value.trim() === "") {
      errorMessage = "Поле не может быть пустым";
    } else if (field.type === "email" && !value.includes("@")) {
      errorMessage = "Введите корректный e-mail";
    }
  }

  const hasError = Boolean(errorMessage || field.error); // булевое, есть ли ошибка вообще, серверная или локальная (что юзер ввел или не ввел)
  const message = errorMessage || field.error || ""; // field.error - будет серверная ошибка

  return { hasError, message };
}