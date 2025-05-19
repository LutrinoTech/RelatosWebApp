import { useEffect, useState } from "react";
import { books as dataBooks } from "../utils/data";

const useGetBooks = (initialTitle = "") => {
  const [title, setTitle] = useState(initialTitle);
  const [books, setBooks] = useState(dataBooks);

  useEffect(() => {
    (function () {
      if (!title.trim()) {
        setBooks(dataBooks);
      }

      const searchTerm = title.toLowerCase().trim();
      const filteredItems = dataBooks.filter((book) =>
        book.title.toLowerCase().includes(searchTerm),
      );
      setBooks(filteredItems);
    })();
  }, [title]);

  return { books, title, setTitle };
};

export { useGetBooks };
