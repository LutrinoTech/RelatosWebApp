import { useEffect, useState } from "react";
import { fetchBookById } from "../services/api";

const useGetSingleBook = (id) => {
    const [book, setBook] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedBook = await fetchBookById(id);
        setBook(fetchedBook);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchData();
  }, [id]);

  return { book };
};

export { useGetSingleBook };
