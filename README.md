Employee Management System
The Employee Management System is a web application built with React.js, Node.js, Express.js, and MySQL.
It allows admins to manage employees and employees to log in and view their personal information.

📋 Main Features
Admin Login:
Admins can log in to:

View all employees

Add new employees

Update employee details

Delete employees

Employee Login:
Employees can log in to:

View their personal profile and details

Other Features:

Upload and view profile pictures

Responsive design using Bootstrap

Secure API communication

🛠️ Technologies
React.js (Frontend)

Node.js + Express.js (Backend)

MySQL (Database)

Axios (API requests)

Bootstrap (Styling)

⚙️ How It Works
Admin logs in to manage employees through the dashboard.

Employee logs in to view their profile information.

Admins and Employees have different pages based on their login type.

Data is fetched securely from a MySQL database using a Node.js server.

📦 Project Structure
/client — React frontend

/server — Node.js backend

/database — MySQL tables and data

🚀 Setup
Install backend and frontend dependencies

Set up MySQL database

Run backend and frontend servers

📄 License
Free to use and modify.


CREATE TABLE employee(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,  /* Increased for hashed passwords */
    salary DOUBLE NOT NULL,
    address VARCHAR(100) NOT NULL,
    image VARCHAR(100) NOT NULL,
    category_id INT NOT NULL,
    FOREIGN KEY (category_id) REFERENCES category(id)
);

CREATE TABLE admin(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE
    );
