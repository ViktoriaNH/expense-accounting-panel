export const loginUser = (username, password) => {
  console.log("Login: собираем данные для отправки", { username, password });

  // возвращаем промис, который выполнится только при вызове
  return fetch(
    "https://aquamarine-chough-477967.hostingersite.com/wp-json/ytyt-finance/v1/auth/login",
    {
      method: "POST",
      headers: {
        "X-App-Key": "app1_68a192ffe001c",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }
  )
    .then((response) => response.json()) // превращаем ответ в объект
    .then((data) => {
      console.log("Login: ответ от сервера", data);

      if (!data?.token) {
        throw new Error(data?.message || "Ошибка входа");
      }

      localStorage.setItem("token", data.token);
      console.log("Login: токен сохранён", data.token);

      return data; 
    })
    .catch((error) => {
      console.error("Ошибка при входе:", error);
      throw error; 
    });
};

export const useRegister = () => {
  const handleRegister = ({ username, email, password }) => {
    console.log("Login: отправляем данные на сервер", {
      username,
      email,
      password,
    });
    return fetch(
      "https://aquamarine-chough-477967.hostingersite.com/wp-json/ytyt-finance/v1/auth/register",
      {
        method: "POST",
        headers: {
          "X-App-Key": "app1_68a192ffe001c",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("Ответ от сервера:", data);
        if (data.success)
          return `Пользователь зарегистрирован! ID: ${data.user_id}`;
        else throw new Error(data.message || "Что-то пошло не так");
      })
      .catch((err) => {
        console.error("Ошибка при регистрации:", err);
        throw err;
      });
  };

  return { handleRegister };
};

export const forgotPassword = (email) => {
  console.log("ForgotPassword: собираем email для отправки", email);

  return fetch(
    "https://aquamarine-chough-477967.hostingersite.com/wp-json/ytyt-finance/v1/auth/forgot-password",
    {
      method: "POST",
      headers: {
        "X-App-Key": "app1_68a192ffe001c",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    }
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Ошибка HTTP: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("ForgotPassword: ответ от сервера", data);

      const testCode = data.test_code || "123456"; // ставим тестовый код сброса, если его нет на сервере
      console.log("Тестовый код для формы восстановления:", testCode);

      if (!data?.success) {
        throw new Error(
          data?.message || "Ошибка при отправке письма, попробуйте снова"
        );
      }

      return data; 
    })
    .catch((error) => {
      console.error("Ошибка при восстановлении пароля:", error);
      throw error; 
    });
};
