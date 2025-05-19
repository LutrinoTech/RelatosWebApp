import { books } from "./data";

function getSingleBook(bookId) {
  const book = books.filter((item) => item.id === bookId);
  return book[0];
}

export { getSingleBook };
