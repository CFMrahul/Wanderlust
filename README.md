# 🌍 Wanderlust

Wanderlust is a full-stack web application inspired by Airbnb where users can explore travel listings, create new listings, edit them, and leave reviews.
The project is built using **Node.js, Express, MongoDB, and EJS** and demonstrates a complete CRUD-based web application.

---

## 🚀 Features

* View all travel listings
* Create new listings
* Edit existing listings
* Delete listings
* Add reviews to listings
* Server-side validation using Joi
* Error handling with custom middleware
* Clean UI using EJS templates
* RESTful routes implementation

---

## 🛠️ Tech Stack

**Backend**

* Node.js
* Express.js
* MongoDB
* Mongoose

**Frontend**

* EJS
* CSS
* JavaScript

**Other Tools**

* Method Override
* Joi Validation
* Express Error Handling

---

## 📂 Project Structure

```
wanderlust
│
├── models
│   ├── listing.js
│   └── review.js
│
├── views
│   ├── listings
│   │   ├── index.ejs
│   │   ├── new.ejs
│   │   ├── edit.ejs
│   │   └── show.ejs
│   │
│   └── error.ejs
│
├── public
│
├── Utills
│   ├── ExpressError.js
│   └── wrapAsync.js
│
├── schema.js
├── index.js
├── package.json
└── README.md
```

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/CFMrahul/Wanderlust.git
```

Go into the project folder:

```bash
cd Wanderlust
```

Install dependencies:

```bash
npm install
```

---

## ▶️ Run the Project

Start the server:

```bash
node index.js
```

Server will start on:

```
http://localhost:8080
```

---

## 📌 API Routes

| Method | Route                 | Description            |
| ------ | --------------------- | ---------------------- |
| GET    | /listings             | Show all listings      |
| GET    | /listings/new         | Form to create listing |
| POST   | /listings             | Create new listing     |
| GET    | /listings/:id         | Show single listing    |
| GET    | /listings/:id/edit    | Edit listing form      |
| PUT    | /listings/:id         | Update listing         |
| DELETE | /listings/:id         | Delete listing         |
| POST   | /listings/:id/reviews | Add review             |

---

## 📸 Screenshots

Add project screenshots here.

Example:

```
Home Page
Listings Page
Add Listing Page
```

---

## 💡 Learning Objectives

This project helped in understanding:

* RESTful routing
* Express middleware
* MongoDB database integration
* MVC project structure
* Error handling
* Data validation

---

## 👨‍💻 Author

**Rahul Kumar**

GitHub:
https://github.com/CFMrahul

---

## ⭐ Support

If you like this project, please give it a **star on GitHub**
