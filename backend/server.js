const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { Pool } = require("pg");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

/* ================= DATABASE CONNECTION ================= */

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

/* ================= CREATE TABLES IF NOT EXISTS ================= */

const initTables = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS career_applications (
        id SERIAL PRIMARY KEY,
        first_name VARCHAR(100),
        last_name VARCHAR(100),
        phone VARCHAR(30),
        email VARCHAR(150),
        created_at TIMESTAMP DEFAULT NOW()
      );
    `);

    await pool.query(`
      CREATE TABLE IF NOT EXISTS foundation_applications (
        id SERIAL PRIMARY KEY,
        first_name VARCHAR(100),
        last_name VARCHAR(100),
        phone VARCHAR(30),
        email VARCHAR(150),
        created_at TIMESTAMP DEFAULT NOW()
      );
    `);

    console.log("Tables ready (career_applications, foundation_applications)");
  } catch (error) {
    console.log("Error creating tables:", error);
  }
};

/* ================= TEST ROUTE ================= */

app.get("/", (req, res) => {
  res.send("Backend Running Successfully");
});

/* ================= CONTACT API ================= */

app.post("/api/contact", async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      countryCode,
      phone,
      subject,
      message,
    } = req.body;

    const query = `
      INSERT INTO contacts
      (
        first_name,
        last_name,
        email,
        country_code,
        phone,
        subject,
        message
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING *;
    `;

    const values = [
      firstName,
      lastName,
      email,
      countryCode,
      phone,
      subject,
      message,
    ];

    const result = await pool.query(query, values);

    res.status(200).json({
      success: true,
      message: "Message saved successfully",
      data: result.rows[0],
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
});

/* ================= CAREER API ================= */

app.post("/api/career", async (req, res) => {
  try {
    const { firstName, lastName, phone, email } = req.body;

    const query = `
      INSERT INTO career_applications
      (first_name, last_name, phone, email)
      VALUES ($1, $2, $3, $4)
      RETURNING *;
    `;

    const values = [firstName, lastName, phone, email];

    const result = await pool.query(query, values);

    res.status(200).json({
      success: true,
      message: "Application submitted successfully",
      data: result.rows[0],
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
});

/* ================= FOUNDATION API ================= */

app.post("/api/foundation", async (req, res) => {
  try {
    const { firstName, lastName, phone, email } = req.body;

    const query = `
      INSERT INTO foundation_applications
      (first_name, last_name, phone, email)
      VALUES ($1, $2, $3, $4)
      RETURNING *;
    `;

    const values = [firstName, lastName, phone, email];

    const result = await pool.query(query, values);

    res.status(200).json({
      success: true,
      message: "Application submitted successfully",
      data: result.rows[0],
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
});

/* ================= SERVER ================= */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  initTables();
  console.log(`Server running on port ${PORT}`);
});