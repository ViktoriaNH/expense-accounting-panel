import { Link } from "react-router-dom";
import "./Input.scss";
import InputField from "../InputField/InputField";

// const Input = ({ fields, message }) => {
//   return (
//     <div className="form__container">
//       {fields.map((field) => {
//         // Чекбокс
//         if (field.type === "checkbox") {
//           return (
//             <label key={field.id} htmlFor={field.id} className="form__checkbox">
//               {/* // отдельно сам чекбокс и текст для удоьства стилизации  */}
//               <input
//                 type="checkbox"
//                 id={field.id}
//                 name={field.name}
//                 className="form__checkbox-input"
//               />
//               <span className="form__checkbox-label">{field.label}</span>
//             </label>
//           );
//         }

//         // Поля text / password
//         return (
//           <div className="form__group" key={field.id}>
//             <div className="form__group-row">
//               <label htmlFor={field.id} className="form__label">
//                 {field.label}
//               </label>

//               {/* поддерживаем ссылку "Забыли пароль?" через поле extra */}
//               {field.extra?.type === "link" && (
//                 <Link to={field.extra.href} className="form__forgot-password">
//                   {field.extra.text}
//                 </Link>
//               )}
//             </div>

//             <div className="form__input-container">
//               {field.iconLeft && (
//                 <img
//                   className="form__input-icon-left"
//                   src={field.iconLeft}
//                   alt=""
//                   width={24}
//                   height={24}
//                 />
//               )}
//               <input
//                 className="form__input"
//                 id={field.id}
//                 name={field.name}
//                 type={field.type}
//                 required={field.required}
//                 minLength={field.minLength}
//                 maxLength={field.maxLength}
//                 placeholder={field.placeholder}
//               />

//               {field.iconRight && (
//                 <img
//                 src={field.iconRight}
//                   className="form__input-icon-right"
//                   alt=""
//                   width={24}
//                   height={24}
//                 />
//               )}
//             </div>

//             <div className='form__message'>
//                 <p>{message}</p>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };



const Input = ({ fields, message }) => {
  return (
    <div className="form__container">
      {fields.map((field) => (
        <InputField key={field.id} field={field} message={message} />
      ))}
    </div>
  );
};

export default Input;

