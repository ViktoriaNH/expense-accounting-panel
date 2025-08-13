import { useEffect } from "react";

const usePageTitle = (title) => {
   useEffect(() => {
  document.title = title || "Expense-accounting panel";
}, [title]);
}

export default usePageTitle;
