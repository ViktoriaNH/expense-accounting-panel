
import { resetPasswordFormFields } from "../../data/authFormFields";
import AuthForm from './../AuthForm/index';

const ResetPassword = () => {
    const resetPasswordTitle = 'Сброс пароля'


    return (
        <AuthForm
        title={resetPasswordTitle}
        fields={resetPasswordFormFields}
        sumbitTeext={resetPasswordTitle}
        //  onSubmit={}
    //   notice={{
    //     text: noticeMessage || "Уже есть аккаунт?",
    //     linkText: noticeMessage ? "" : "Войдите",
    //     href: noticeMessage ? undefined : "/auth/login",
    //     type: noticeType,
    //   }}
        />
    )
}


export default ResetPassword;
