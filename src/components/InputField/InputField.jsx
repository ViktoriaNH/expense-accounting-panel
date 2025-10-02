import { useState } from "react";
import "./InputField.scss";
import { Link } from "react-router-dom";
import { validateInputs } from "../../utils/validateInput";
import { getInputClass } from "../../utils/getInputClass";
import { usePassStatus } from "../../hooks/usePassStatus";

const InputField = ({
  field,
  onStatusChange,
  serverError, // новый проп: строка с серверной ошибкой для этого поля
  clearServerError, // новый проп: функция (fieldId) => void
}) => {
  const [value, setValue] = useState("");
  const [touched, setTouched] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // не хранится в useState, потому что вычисляется из value
  // это называется derived state — вычисляемое состояние
  const isFilled = value.trim() !== "";

  // вычисляем валидацию
  const { hasError, message } = validateInputs(
    field,
    value,
    touched,
    serverError
  );

  // успех (галочка) показывается только после blur
  const isSuccess = touched && isFilled && !hasError;

  //  const errorMessage = serverError || message; // приоритет серверной ошибки
  // const isError = Boolean(serverError || message);

  // const handleChange = (e) => {
  //   setValue(e.target.value);
  // }; - тут кнопка будет задизэйблена и после ввода последнего поля, надо куда-то кликать дополнительно, чтобы сработал success и кнопка стала активной

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);

    // очищаем серверную ошибку, когда юзер начал печатать
    if (serverError) {
      clearServerError(field.id);
    }

    // Success для кнопки: обновляем статус поля на лету
    const successForButton = newValue.trim() !== "" && !hasError;
    onStatusChange(field.id, successForButton);
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

  // класс инпута в зависимости от состояния
  const inputClass = `
  ${getInputClass(field, isFilled, hasError)}
  ${isSuccess ? "form__input--success" : ""}
`;

  usePassStatus(isSuccess, field.id, onStatusChange); // отслеживает, когда isSuccess меняется

  // чекбокс отдельно
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
      <div className="form__group-main">
        <label htmlFor={field.id} className="form__label">
          {field.label}
        </label>

        <div className="form__group-secondary">
          <div className="form__input-status">
            {(hasError || isSuccess) && (
              <span className={hasError ? "text-error" : "text-success"}>
                {hasError ? "Error." : "Success."}
              </span>
            )}
          </div>

          {field.extra?.type === "link" && (
            <Link to={field.extra.href} className="form__forgot-password">
              {field.extra.text}
            </Link>
          )}
        </div>
      </div>

      <div
        className={`form__input-container ${
          field.type === "password" ? "form__input-container--password" : ""
        }`}
      >
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
        />

        {field.type === "password" && (
          <img
            src={showPassword ? field.iconOpen : field.iconClose}
            className="form__input-icon-eye"
            alt="toggle password"
            width={24}
            height={24}
            style={{ cursor: "pointer" }}
            onClick={() => setShowPassword((prev) => !prev)}
          />
        )}

        {(hasError || isSuccess) && (
          <img
            src={hasError ? field.iconRightError : field.iconRightSuccess}
            className="form__input-icon-status"
            alt={hasError ? "error" : "success"}
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
