import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useState } from "react";
import BookCard from "../components/BookCard";

const BrowseBooks = () => {
  const books = useSelector((state) => state.books);
  const { category } = useParams();
  const [search, setSearch] = useState("");

  // Start with all books
  let filteredBooks = books;

  // Filter by category if URL has category
  if (category) {
    filteredBooks = filteredBooks.filter(
      (book) =>
        book.category.toLowerCase() === category.toLowerCase()
    );
  }

  // Then apply search filter
  if (search.trim() !== "") {
    filteredBooks = filteredBooks.filter((book) =>
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())
    );
  }

  return (
    <>
      <h1>Browse Books</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by title or author..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))
        ) : (
          <p>No books found</p>
        )}
      </div>
    </>
  );
};

export default BrowseBooks;