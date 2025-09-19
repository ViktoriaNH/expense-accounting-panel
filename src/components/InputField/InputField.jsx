import { useState } from "react";
import "./InputField.scss";
import { Link } from "react-router-dom";
import { validateInputs } from "../../utils/validateInput";
import { getInputClass } from "../../utils/getInputClass&Type";
import { setRightIcon } from "../../utils/setRightIcon";

const InputField = ({ field }) => {
  const [value, setValue] = useState("");
  const [touched, setTouched] = useState(false);
  const [showPassword, setShowPassword] = useState(true); // пароль изначально скрыт

  // не хранится в useState, потому что вычисляется из value
  // это называется derived state — вычисляемое состояние
  const isFilled = value.trim() !== "";

  // вычисляем валидацию
  const { hasError, message } = validateInputs(
    field,
    value,
    touched,
    showPassword
  );

  // успех (галочка) показывается только после blur
  const isSuccess = touched && isFilled && !hasError;

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleBlur = () => {
    setTouched(true);
    // показываем ошибки только после blur
  };

  // вычисляем динамически type, а не берем из fields
  // нужно для отделения логики поля пароля
  const inputType =
    field.type === "password"
      ? showPassword
        ? "text"
        : "password"
      : field.type;

  // вычисляем right icon
  const rightIcon = setRightIcon(field, hasError, isSuccess, showPassword);

  // класс инпута в зависимости от состояния
  const inputClass = getInputClass(field, isFilled, hasError);

  // чекбокс — отдельный кейс
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
          type={inputType}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          required={field.required}
          minLength={field.minLength}
          maxLength={field.maxLength}
          placeholder={field.placeholder}
          className={inputClass}
          // временно сделал toggle прямо в input для теста
          onClick={() =>
            field.id === "password" && setShowPassword((prev) => !prev)
          }
        />

        {/* Для поля password — глаз или success */}
        {field.id === "password" && rightIcon && (
          <img
            src={rightIcon}
            className="form__input-icon-right"
            alt="toggle password"
            width={24}
            height={24}
            style={{ cursor: "pointer" }}
            onClick={() => setShowPassword((prev) => !prev)}
          />
        )}

        {/* Для остальных полей показываем ошибки/успех */}
        {field.id !== "password" && rightIcon && (
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
          {hasError && field.iconRightError && (
            <img src={field.iconRightError} alt="" width={16} height={16} />
          )}
          {isSuccess && field.iconRightSuccess && (
            <img src={field.iconRightSuccess} alt="" width={16} height={16} />
          )}
          <p>{message}</p>
        </div>
      )}
    </div>
  );
};

export default InputField;
