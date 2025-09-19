export const getInputClass = (field, isFilled, hasError) => {
  let inputClass = "form__input";

  if (field.disabled) {
    inputClass += " form__input--disabled";
  } else if (hasError) {
    inputClass += " form__input--error";
  } else if (field.success) {
    inputClass += " form__input--success";
  } else if (isFilled) {
    inputClass += " form__input--filled";
  }

  return inputClass;
}




