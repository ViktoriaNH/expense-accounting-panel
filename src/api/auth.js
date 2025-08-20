export const login = () => {};

export const registerUser = (name, email, password) => {
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
