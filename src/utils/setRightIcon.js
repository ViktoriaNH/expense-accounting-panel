// setRightIcon.js
export const setRightIcon = (field, hasError, isSuccess, showPassword = false) => {
  // 1. Иконки ошибок/успеха для всех полей
  if (hasError && field.iconRightError) return field.iconRightError;
  if (isSuccess && field.iconRightSuccess) return field.iconRightSuccess;

  // 2. Иконка для поля password с глазиком
  if (field.id === "password") {
    return showPassword ? field.iconOpen : field.iconClose;
  }

  // 3. Для остальных полей иконки справа нет
  return null;
};

