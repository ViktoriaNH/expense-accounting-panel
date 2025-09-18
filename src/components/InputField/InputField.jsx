import { useState } from "react";
import "./InputField.scss";
import { Link } from "react-router-dom";
import { validateInputs } from "../../utils/validateInput";
import { getInputClass } from "../../utils/getInputClass";
import { setRightIcon } from "../../utils/setRightIcon";

const InputField = ({ field }) => {
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

const { hasError, message } = validateInputs(field, value, touched);
const isSuccess = touched && isFilled && !hasError;

 const inputClass = getInputClass(field, isFilled, hasError);
  const rightIcon = setRightIcon(field, hasError, isSuccess);


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
