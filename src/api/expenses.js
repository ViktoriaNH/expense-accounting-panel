// получаем категории доходов и расходов
export const getExpenseOrIncomeCategories = (type) => {
  return fetch(
    `https://aquamarine-chough-477967.hostingersite.com/wp-json/ytyt-finance/v1/categories?type=${type}`,
    // type - или получаем ктаегории с расходами, или с доходами
    {
      method: "GET",
      headers: {
        "X-App-Key": "app1_68a192ffe001c",
      },
    }
  )
    .then((res) => {
      // Если статус не 200–299, выбрасываем ошибку
      if (!res.ok) {
        throw new Error(`Ошибка HTTP: ${res.status}`); // Если res.ok = false, бросаем ошибку, чтобы её поймать в .catch.
      }
      // throw — это ключевое слово JavaScript, которое выбрасывает ошибку
      // Когда ошибка выброшена, текущий поток выполнения функции прекращается,
      // и управление передаётся в ближайший обработчик ошибок: .catch или try/catch.

      return res.json(); // если всё ок, парсим JSON
    })

    .then((data) => {
      console.log("Ответ от сервера", data);
      return data;
    })

    .catch((error) => {
      console.error("Произошла ошибка при получении данных:", error);
      // можно вернуть дефолтное значение, чтобы код дальше не ломался
      return [];
    });
};

export const addExpenseOrIncomeCategories = (name, type, color, icon) => {
  const newCategory = { name, type, color, icon };
  const loginToken = localStorage.getItem("token");

  return fetch(
    `https://aquamarine-chough-477967.hostingersite.com/wp-json/ytyt-finance/v1/categories?type=${type}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${loginToken}`,
        "X-App-Key": "app1_68a192ffe001c",
        "Content-Type": "application/json",
        // потому что данные мы отправляем в  JSON
      },
      body: JSON.stringify(newCategory), // // превращаем объект в JSON
    }
  )
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Ошибка HTTP: ${res.status}`);
      }
      return res.json;
    })

    .then((data) => {
      console.log("Ответ от сервера", data);
      return data;
    })

    .catch((error) => {
      console.error("Произошла ошибка при получении данных:", error);
      // можно вернуть дефолтное значение, чтобы код дальше не ломался
      return [];
    });
};

// POST изменяет данные на сервере → нужно быть аккуратным, чтобы не создать дубликаты.
