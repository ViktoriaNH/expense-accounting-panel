import { Link } from "react-router-dom";
import "./Input.scss";
import InputField from "../InputField/InputField";

const Input = ({ fields, message, onStatusChange }) => {
  return (
    <div className="form__container">
      {fields.map((field) => (
        <InputField key={field.id} field={field} message={message}  onStatusChange={onStatusChange}  />
      ))}
    </div>
  );
};

export default Input;

