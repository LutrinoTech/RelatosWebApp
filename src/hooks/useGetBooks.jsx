import { useEffect, useState } from "react";
import { fetchBooks, fetchBooksByTitle } from "../services/api";

const useGetBooks = (initialTitle = "") => {
  const [title, setTitle] = useState(initialTitle);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchBookFunction = title.trim() ? fetchBooksByTitle : fetchBooks;
        const fetchedBooks = await fetchBookFunction(title.trim());
        setBooks(fetchedBooks);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchData();
  }, [title]);

  return { books, title, setTitle };
};

export { useGetBooks };
