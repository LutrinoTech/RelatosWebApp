import { useEffect, useState } from "react";
import { fetchBooks } from "../services/api";

const useGetBooks = (initialTitle = "") => {
  const [title, setTitle] = useState(initialTitle);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedBooks = await fetchBooks();
        setBooks(fetchedBooks.books);

        if (!title.trim()) {
          setBooks(fetchedBooks.books);
        } else {
          const searchTerm = title.toLowerCase().trim();
          const filteredItems = fetchedBooks.books.filter((book) =>
            book.title.toLowerCase().includes(searchTerm),
          );
          setBooks(filteredItems);
        }
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchData();
  }, [title]);

  return { books, title, setTitle };
};

export { useGetBooks };
