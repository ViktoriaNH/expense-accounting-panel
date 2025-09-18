import { useState } from "react";
import "./InputField.scss";
import { Link } from "react-router-dom";

// const InputField = () => {

//     const [value, setValue] = useState();

//       // isFilled можно не хранить в отдельном useState,
//   // а вычислять прямо из value
//     const isFilled = value.tirm !== 'null';

// }

// export default InputField;

const InputField = ({ field, message }) => {
  const [value, setValue] = useState("");
  const [touched, setTouched] = useState(false);

  // не хранится в реакте в useState, потому что вычисляется непосредствеено из велью
  // это называется derived state - вычисляемое состояние
  const isFilled = value.trim() !== "";

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleBlur() {
    setTouched(true); // показываем ошибки только после blur
  }

  let errorMessage = "";

  if (touched) {
    if (value.trim() === "") {
      errorMessage = "Поле не может быть пустым";
    } else if (field.type === "email" && !value.includes("@")) {
      errorMessage = "Введите корректный e-mail";
    }
  }

  const hasError = Boolean(errorMessage);

  // вычисляем классы
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

  let rightIcon = null;
  if (hasError) {
    rightIcon = field.iconRightError;
  } else if (field.success) {
    rightIcon = field.iconRight;
  }

  // чекбокс отдельный кейс
  if (field.type === "checkbox") {
    return (
      <label htmlFor={field.id} className="form__checkbox">
        <input
          type="checkbox"
          id={field.id}
          name={field.name}
          className="form__checkbox-input"
        />
        <span className="form__checkbox-label">{field.label}</span>
      </label>
    );
  }

  return (
    <div className="form__group">
      <div className="form__group-row">
        <label htmlFor={field.id} className="form__label">
          {field.label}
        </label>

        {field.extra?.type === "link" && (
          <Link to={field.extra.href} className="form__forgot-password">
            {field.extra.text}
          </Link>
        )}
      </div>

      <div className="form__input-container">
        {field.iconLeft && (
          <img
            className="form__input-icon-left"
            src={field.iconLeft}
            alt=""
            width={24}
            height={24}
          />
        )}

        <input
          id={field.id}
          name={field.name}
          type={field.type}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          required={field.required}
          minLength={field.minLength}
          maxLength={field.maxLength}
          placeholder={field.placeholder}
          className={inputClass}
        />

        {rightIcon && (
          <img
            src={rightIcon}
            className="form__input-icon-right"
            alt=""
            width={24}
            height={24}
          />
        )}
      </div>

      {message && (
        <div className="form__message">
          <img src="" alt="" width={16} height={16} />
          <p>Привет</p>
        </div>
      )}
    </div>
  );
};

export default InputField;
