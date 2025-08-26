export const loginUser = (username, password) => {
    console.log("Login: отправляем данные на сервер", { username, password });
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
    .then((res) => res.json())
    .then((data) => {
          console.log("Login: ответ от сервера", data);
      if (!data?.token) {
        throw new Error(data?.message || "Ошибка входа");
      }

      localStorage.setItem("token", data.token);
           console.log("Login: токен сохранён", data.token);
      console.log("Успешный вход:", data);

      return data;
    });
};



export const registerUser = (name, email, password) => {
   console.log("Register: отправляем данные на сервер", { name, email, password });
  return fetch(
    "https://aquamarine-chough-477967.hostingersite.com/wp-json/ytyt-finance/v1/auth/register",
    {
      method: "POST",
      headers: {
        "X-App-Key": "app1_68a192ffe001c",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: name, email, password }),
    }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log("Ответ от сервера:", data);
      return data;
    });
};
