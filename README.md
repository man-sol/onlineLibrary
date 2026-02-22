# 📚 Online Library Management App

A modern **React + Redux Toolkit** web application for managing books in an online library.

Users can:

- View popular books on the Home page  
- Browse all books  
- Search books  
- Add new books  
- View book details  
- See a custom 404 page for invalid routes  

The project uses a **Black & Yellow theme UI** with responsive design.

---

##  Tech Stack

- React
- Redux Toolkit
- React Router DOM
- CSS (Custom Styling)
- Vite (Build Tool)

---

##  Project Structure

```
src/
 ├── components/
 │    ├── Navbar.jsx
 │    ├── BookCard.jsx
 │
 ├── pages/
 │    ├── Home.jsx
 │    ├── BrowseBooks.jsx
 │    ├── AddBook.jsx
 │    ├── BookDetails.jsx
 │    ├── NotFound.jsx
 │
 ├── redux/
 │    ├── store.js
 │    ├── booksSlice.js
 │
 ├── data/
 │    ├── dummyBooks.js
 │
 ├── App.jsx
 ├── main.jsx
 ├── App.css
```

---

##  Features

###  Home Page
- Displays popular books
- Displays categories
- Responsive grid layout

###  Browse Books
- Shows all books
- Search functionality (by title)
- Filter by category

###  Add Book
- Add new book with:
  - Title
  - Author
  - Category
  - Description
  - Rating (0–5 only)
- Rating validation (cannot exceed 5)

###  Book Details
- View complete book information
- Back navigation

###  404 Page
- Custom page for invalid routes

---

##  UI Theme

- Black background
- Yellow highlight color
- Styled navbar
- Responsive card layout
- Mobile friendly

---

# 🛠 Installation & Setup

Follow these steps to run the project locally:

---

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/man-sol/onlineLibrary.git

```

If you already downloaded the project, simply open the project folder.

---

## 2️⃣ Install Dependencies

```bash
npm install
```

---

## 3️⃣ Start Development Server

```bash
npm run dev
```

You will see something like:

```
Local: http://localhost:5173/
```

Open it in your browser.


## or go to link - https://github.com/man-sol/onlineLibrary