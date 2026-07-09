# 🎬 Movie Explorer

A modern **Movie Management Web Application** built using **React.js**, **Express.js**, and **MongoDB**. The application allows users to browse, search, add, edit, delete, and manage movies while providing authentication, favorites, watchlist, dark/light mode, and a responsive user interface.

---

## 🚀 Features

### 🔐 Authentication
- User Registration
- User Login
- Protected Routes
- Logout Functionality
- Local Authentication using Context API

---

### 🎥 Movie Management (CRUD)

- View Movies
- Add New Movies
- Edit Existing Movies
- Delete Movies
- Movie Details Page
- Search Movies
- Responsive Movie Cards

---

### ❤️ User Features

- Add Movies to Favorites
- Add Movies to Watchlist
- Remove from Favorites
- Remove from Watchlist
- Persistent Data using Local Storage

---

### 🎨 UI Features

- Dark / Light Theme
- Theme Persistence
- Responsive Design
- Beautiful Movie Cards
- Modern Navbar
- Empty State Screens
- Loading Indicators
- Toast Notifications
- SweetAlert Delete Confirmation

---

### ⚡ Backend Features

- RESTful APIs
- Express.js
- MongoDB
- Mongoose ODM
- CRUD Operations
- Error Handling
- Modular Folder Structure

---

## 🛠 Tech Stack

### Frontend

- React.js
- React Router DOM
- Axios
- Tailwind CSS
- React Icons
- React Toastify
- SweetAlert2

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS
- dotenv

---

# 📁 Project Structure

```
Movie Explorer
│
├── frontend
│   ├── components
│   ├── context
│   ├── layouts
│   ├── pages
│   ├── router
│   ├── services
│   └── App.jsx
│
├── backend
│   ├── config
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── data
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

# ⚙ Installation

## Clone Repository

```bash
git clone https://github.com/Ankit2587/movie-explorer.git
```

---

## Frontend

```bash
cd frontend

npm install

npm run dev
```

Runs on

```
http://localhost:5173
```

---

## Backend

```bash
cd backend

npm install

npm run dev
```

Runs on

```
http://localhost:5000
```

---

# 🔗 API Endpoints

## Movies

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /api/movies | Get All Movies |
| GET | /api/movies/:id | Get Single Movie |
| POST | /api/movies | Add Movie |
| PUT | /api/movies/:id | Update Movie |
| DELETE | /api/movies/:id | Delete Movie |

---

# 💾 Local Storage

The application stores the following data locally:

- Logged In User
- Theme Preference
- Favorite Movies
- Watchlist

All data is automatically restored after refreshing the browser.

---

# ✨ Key Features

- Full Stack MERN Application
- REST API Integration
- Context API State Management
- CRUD Functionality
- Responsive Design
- Dark & Light Theme
- Search Functionality
- Movie Details
- Toast Notifications
- SweetAlert Confirmation
- Local Storage Support
- Modern UI
- Protected Routes

---

# 📸 Screenshots

> Add screenshots of the following pages:

- Home Page
- Movies Page
- Movie Details
- Add Movie
- Edit Movie
- Login
- Register
- Favorites
- Watchlist

---

# 📈 Future Improvements

- JWT Authentication
- Role Based Access
- Movie Categories
- Image Upload
- Pagination from Backend
- Movie Reviews
- Ratings System
- Cloud Image Storage
- TMDB API Integration

---

# 👨‍💻 Author

**Ankit Thakur**

GitHub

https://github.com/Ankit2587

---

# ⭐ If you like this project

Give this repository a **Star ⭐** on GitHub.

---

## 📄 License

This project is created for educational and learning purposes.
