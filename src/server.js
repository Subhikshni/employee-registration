const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
const port = 5000;

// MySQL connection configuration
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "AmazingSubhi14",
  database: "employees",
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Connected to MySQL database");
});

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Route to handle form submission
app.post("/submit-form", (req, res) => {
  const {
    name,
    dateOfBirth,
    employeeId,
    salary,
    gender,
    department,
    designation,
    address,
    bloodGroup,
    numberOfHoursWorked,
    branchLocation,
    eligibleForPromotion,
  } = req.body;

  // Insert form data into the database
  const sql =
    "INSERT INTO employee_details (name, date_of_birth, employee_id, salary, gender, department, designation, address, blood_group, number_of_hours_worked, branch_location, eligible_for_promotion) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
  db.query(
    sql,
    [
      name,
      dateOfBirth,
      employeeId,
      salary,
      gender,
      department,
      designation,
      address,
      bloodGroup,
      numberOfHoursWorked,
      branchLocation,
      eligibleForPromotion,
    ],
    (err, result) => {
      if (err) {
        res.status(500).send("Error inserting form data into database");
        throw err;
      }
      console.log("Form data inserted into database");
      res.status(200).send("Form data submitted successfully");
    }
  );
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
