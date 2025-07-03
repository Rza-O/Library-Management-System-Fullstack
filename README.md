# 📚 Library Management System Frontend

The Minimal Library Management System (Frontend) is a clean, responsive, and feature-rich client-side application built with React, TypeScript, Redux Toolkit Query (RTK Query), and Tailwind CSS. It allows users to manage books, perform CRUD operations, borrow books, and view a borrow summary without requiring authentication. The frontend interacts seamlessly with a RESTful API, leveraging RTK Query for efficient state management and API integration.This project emphasizes a minimalist UI, intuitive user experience, and robust type safety, making it suitable for small-scale library management needs. 



## 🚀 Features

- 🔐 **Public Routes**: All pages are accessible without authentication.
- 🔄 **Book Management**:
  - **Book List**: Displays books in a responsive table with columns for Title, Author, Genre, ISBN, Copies, Availability, Image and Actions (Edit, Delete, Borrow).
  - **Add Book**: Form to create a new book with fields for Title, Author, Genre, ISBN, Description, Copies, Image and Availability.
  - **Edit Book**: Pre-filled form to update book details, reflecting changes instantly in the UI.
  - **Delete Book**: Confirmation dialog before removing a book.
  - **Borrow Book**: Form to borrow a book with Quantity and Due Date fields, ensuring quantity does not exceed available copies.
- 📊 **Borrow Summary**: Aggregated view of borrowed books with Book Title, ISBN, and Total Quantity Borrowed.
- ✅ **Responsive UI**: Fully responsive layout for mobile, tablet, and desktop devices using Tailwind CSS.
- ⚙️ **Navigation**: Simple navbar with links to All Books, Add Book, and Borrow Summary.
- ©️ **Footer**: Basic footer with site credits.
- 🔐 **Schema Validation** with Mongoose & TypeScript
- 🔄 **Business Logic Enforcement**:
  - Auto-update availability on borrow
  - Prevent borrowing more than available
- 🧠 **Instance Method** to deduct book copies and update availability
- ⚙️ **Middleware Hook** to handle availability during book creation/update
- 📊 **Aggregation Pipeline** to summarize borrowed books
- 🔍 **Advanced Querying**: filter, sort, and limit books
- ✅ **Robust Error Handling** with clear success & failure responses
- 📦 **RESTful API** architecture with versioning support

## 🧱 Tech Stack

- **Frontend**: React + Vite + React Router (Data mode)
- **Language**: TypeScript
- **State Management**: Redux Toolkit + RTK Query
- **Styling**: Tailwind CSS
- **Form Validation**: Zod
- **Backend**: Express.js
- **Language**: TypeScript
- **Database**: MongoDB with Mongoose ODM
- **Validation**: Mongoose schema validation
- **Tooling**: ts-node-dev, dotenv, nodemon, ESLint


## 📁 Project Structure Frontend

```plaintext
├── public/                   # Static assets
├── src/
│   ├── redux/                # RTK Query API slices for book and borrow endpoints
│   │   ├── store/            # Redux store configuration and slices
│   ├── components/           # Reusable UI components (e.g., Navbar, Footer, BookTable)
│   ├── pages/                # Page components (Home, All Books, BorrowSummary)
│   ├── store/                # Redux store configuration and slices
│   ├── types/                # TypeScript interfaces and types
│   ├── App.tsx               # Main app component
│   ├── index.tsx             # Entry point
│   ├── main.css              # Tailwind CSS styles
├── .gitignore                # Git ignore file
├── package.json              # Project dependencies and scripts
├── tsconfig.json             # TypeScript configuration
├── README.md                 # This file

```

## 📁 Project Structure Backend

```plaintext
src/
├── app.ts                  # Express setup and configuration
    ├── routes/             # 
    ├── models/             # Mongoose models and interfaces
    ├── controllers/        # Business logic & API routes for books and borrowing
    ├── interfaces/         # TypeScript interfaces
├── server.ts               # Application entry point
├── app.ts                  # Application entry point

```


## ✅ Business Logic
- Book Availability: Books with 0 copies are marked unavailable.
- Borrowing: Borrow quantity cannot exceed available copies; books become unavailable when copies reach 0.
- Optimistic Updates: UI reflects changes instantly, with rollback on API failure.
- Error Handling: User-friendly error messages via toast notifications.


## ⚙️ Getting Started Frontend

Follow these steps to set up and run the project locally.

### 1️⃣ Prerequisites

- **Node.js**: Version >= 18
- A running backend API (e.g., Node.js + Express + MongoDB) with endpoints for books and borrows.

### 2️⃣ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Rza-O/Library-Management-System-Fullstack
   cd /library-management-system/Frontend
2. Install dependencies
    ```bash
    npm install
3. Start the development server
    ```bash
    npm run dev
    ```

## ⚙️ Getting Started Backend

Follow these steps to set up and run the project locally.

### 1️⃣ Prerequisites

- **Node.js**: Version >= 18
- **MongoDB**: Either MongoDB Atlas or a local MongoDB instance

### 2️⃣ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Rza-O/Library-Management-System-Fullstack
   cd cd /library-management-system/backendrontend
2. Create a .env file in the project root based on .env.example

    ```bash
   MONGODB_URL=mongodb+srv://<username>:<password>@cluster.mongodb.net/dbname
   ```
3. Install dependencies
    ```bash
    npm install
4. Start the development server
    ```bash
    npm run dev
    ```


## 🙏🏽 Acknowledgments
- Inspired by minimalist library management systems like BookLovers and PrintPress.
- Built with  using React, Redux Toolkit Query, TypeScript, and Tailwind CSS.