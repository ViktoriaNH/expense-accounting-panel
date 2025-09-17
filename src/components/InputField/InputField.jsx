
import { useState } from 'react';
import './InputField.scss'

// const InputField = () => {

//     const [value, setValue] = useState();

//       // isFilled можно не хранить в отдельном useState,
//   // а вычислять прямо из value
//     const isFilled = value.tirm !== 'null';

// }

// export default InputField;


const InputField = ({ field, message }) => {
  const [value, setValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  // derived state — вычисляем на основе value
  const isFilled = value.trim() !== "";

  // логика "пользователь печатает"
  useEffect(() => {
    if (!isTyping) return;
    const timeout = setTimeout(() => setIsTyping(false), 800);
    return () => clearTimeout(timeout);
  }, [value]);

  function handleChange(e) {
    setValue(e.target.value);
    setIsTyping(true);
  }

  // вычисляем классы
  const inputClass = `
    form__input
    ${isFilled ? "form__input--filled" : ""}
    ${isTyping ? "form__input--typing" : ""}
    ${field.error ? "form__input--error" : ""}
    ${field.success ? "form__input--success" : ""}
  `;

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
          required={field.required}
          minLength={field.minLength}
          maxLength={field.maxLength}
          placeholder={field.placeholder}
          className={inputClass}
        />

        {field.iconRight && (
          <img
            src={field.iconRight}
            className="form__input-icon-right"
            alt=""
            width={24}
            height={24}
          />
        )}
      </div>

      {message && (
        <div className="form__message">
          <p>{message}</p>
        </div>
      )}
    </div>
  );
};

export default InputField;