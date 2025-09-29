import { Link } from "react-router-dom";
import "./Input.scss";
import InputField from "../InputField/InputField";

const Input = ({ fields, message, onStatusChange, serverErrors, clearServerError }) => {
  return (
    <div className="form__container">
      {fields.map((field) => (
        <InputField key={field.id} field={field} message={message}  onStatusChange={onStatusChange} 

             serverError={serverErrors[field.id]}       // конкретная ошибка
          clearServerError={clearServerError} 
          />
      ))}
    </div>
  );
};

export default Input;

