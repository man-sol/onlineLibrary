import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/booksSlice";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    author: "",
    category: "",
    description: "",
    rating: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(form).some((val) => val === "")) {
      alert("All fields required!");
      return;
    }

    dispatch(
      addBook({
        ...form,
        id: Date.now(),
        rating: Number(form.rating),
      })
    );

    navigate("/books");
  };

  return (
    <>
      <h1>Add Book</h1>

      <form onSubmit={handleSubmit}>
        {Object.keys(form).map((key) => (
          <input
            key={key}
            type={key === "rating" ? "number" : "text"}
            placeholder={key}
            onChange={(e) =>
              setForm({ ...form, [key]: e.target.value })
            }
          />
        ))}

        <button type="submit">Add Book</button>
      </form>
    </>
  );
};

export default AddBook;