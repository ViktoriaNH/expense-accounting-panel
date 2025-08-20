import { registerUser } from "../api/auth";

export const useRegister = () => {
  const handleRegister = async ({ username, email, password }) => {
    const data = await registerUser(username, email, password);

    if (data.success) {
      return `Пользователь зарегистрирован! ID: ${data.user_id}`;
    } else {
      throw new Error(data.message || 'Что-то пошло не так');
    }
  };

  return { handleRegister };
};