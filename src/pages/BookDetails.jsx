import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const BookDetails = () => {
  const { id } = useParams();
  const books = useSelector((state) => state.books);

  const book = books.find((b) => b.id === Number(id));

  if (!book) return <h2>Book not found</h2>;

  return (
    <>
      <h1>{book.title}</h1>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Description:</strong> {book.description}</p>
      <p><strong>Rating:</strong> ⭐ {book.rating}</p>

      <Link to="/books">Back to Browse</Link>
    </>
  );
};

export default BookDetails;