import axios from "axios";

const BASE_URL = "https://spring-cloud-gateway-production-ea4e.up.railway.app/ms-books-catalogue";

export const fetchBooks = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/books`);
    return response.data.books;
  } catch (error) {
    console.error("Error fetching books:", error);
    throw error;
  }
};

export const fetchBookById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/books/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching book with id ${id}:`, error);
    throw error;
  }
};

export const fetchBooksByTitle = async (title) => {
  try {
    const response = await axios.get(`${BASE_URL}/booksbytitle?title=${title}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching books with title ${title}:`, error);
    throw error;
  }
}
