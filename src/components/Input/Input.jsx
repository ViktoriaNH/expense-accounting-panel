import { Link } from "react-router-dom";
import "./Input.scss";

const Input = ({ fields }) => {
  return (
    <div className="form__container">
      {fields.map((field) => {
        // Чекбокс
        if (field.type === "checkbox") {
          return (
            <label
              key={field.id}
              htmlFor={field.id}
              className="form__checkbox"
            >
                {/* // отдельно сам чекбокс и текст для удоьства стилизации  */}
            <input 
                type='checkbox'
                id={field.id}
                name={field.name}
                className="form__chekbox-input"
            />
            <span className="form__chekbox-label">{field.label}</span>  
            </label>
          );
        }

        // Поля text / password
        return (
          <div className="form__group" key={field.id}>
            <div className="form__group-row">
              <label htmlFor={field.id} className="form__label">
                {field.label}
              </label>

              {/* поддерживаем ссылку "Забыли пароль?" через поле extra */}
              {field.extra?.type === "link" && (
                <Link to={field.extra.href} className="form__forgot-password">
                  {field.extra.text}
                </Link>
              )}
            </div>

            <input
              id={field.id}
              name={field.name}
              type={field.type}
              required={field.required}
              minLength={field.minLength}
              maxLength={field.maxLength}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Input;
