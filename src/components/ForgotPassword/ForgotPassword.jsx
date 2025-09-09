import { forgotPasswordFormFields } from "../../data/authFormFields";
import AuthForm from "../AuthForm/AuthForm";

const ForgotPassword = () => {
    const forgotPasswordTitle = 'Восстановить пароль'


    return (
    <AuthForm 
        title={forgotPasswordTitle}
        fields={forgotPasswordFormFields}
        submitText={forgotPasswordTitle}
        // onSubmit={} // обработчик алика 
    
    />
)
} 
export default ForgotPassword;



