import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import BookCard from "../components/BookCard";

const Home = () => {
  const books = useSelector((state) => state.books);

  const categories = [...new Set(books.map((b) => b.category))];

  return (
    <>
      <h1>Welcome to Online Library</h1>

      <h2>Categories</h2>
      <div className="category-list">
        {categories.map((cat) => (
          <Link key={cat} to={`/books/${cat}`} className="category-item">
            {cat}
          </Link>
        ))}
      </div>

      <h2>All Books</h2>
      <div className="grid">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </>
  );
};

export default Home;