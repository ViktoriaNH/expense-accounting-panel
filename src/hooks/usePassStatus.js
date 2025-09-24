import { useEffect, useRef } from "react";

 // отслеживаем изменение статуса поля (isSuccess или нет), чтобы передать это в authForm
export const usePassStatus = (value, id, onStatusChange) => {
  // value - текущее состояние поля: прошло валидацию или нет
  // id - идентификатор поля, из массива 
  // onStatusChange - функция для обновления fieldsStatus

  // храним предыдущий статус поля, useRef нужен, чтобы значение сохранялось между рендерами
  const prevRef = useRef(value);

  useEffect(() => {
 // проврка, что id существует и onStatusChange - это функция, чтобы не вызывать ошибку, хорошая практика так делать
    if (!id || typeof onStatusChange !== "function") return;

    // сравниваем текущий статус с предыдущим
    // если изменился, уведомляем родителя и обновляем prevRef
    if (prevRef.current !== value) {
      onStatusChange(id, value);  // сообщаем, что поле isSuccess или нет
      prevRef.current = value;    // сохраняем новое значение для следующей проверки
    }
  }, [value, id, onStatusChange]); // эффект срабатывает при изменении какого-либо из этих трех параметров
};

