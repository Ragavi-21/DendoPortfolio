const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { Pool, Client } = require("pg");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

/* ================= DATABASE CONNECTION & INITIALIZATION ================= */


const dbConfig = {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
};
const databaseName = process.env.DB_NAME || "dendo_contact";

const pool = new Pool({
  ...dbConfig,
  database: databaseName,
});

const ensureDatabaseExists = async () => {
  const tempClient = new Client({
    ...dbConfig,
    database: "postgres",
  });
  try {
    await tempClient.connect();
    const res = await tempClient.query(
      "SELECT 1 FROM pg_database WHERE datname = $1",
      [databaseName]
    );
    if (res.rowCount === 0) {
      console.log(`🔨 Database "${databaseName}" not found. Creating database...`);
      await tempClient.query(`CREATE DATABASE "${databaseName}"`);
      console.log(`✅ Database "${databaseName}" created successfully.`);
    } else {
      console.log(`✅ Database "${databaseName}" already exists.`);
    }
  } catch (error) {
    console.error("Error verifying/creating database:", error.message);
  } finally {
    await tempClient.end();
  }
};

/* ================= CREATE TABLES IF NOT EXISTS ================= */

const initTables = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS contacts (
        id SERIAL PRIMARY KEY,
        first_name VARCHAR(100),
        last_name VARCHAR(100),
        email VARCHAR(150),
        country_code VARCHAR(10),
        phone VARCHAR(30),
        subject VARCHAR(100),
        message TEXT,
        created_at TIMESTAMP DEFAULT NOW()
      );
    `);

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

    console.log("Tables ready (contacts, career_applications, foundation_applications)");
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

/* ================= ADMIN API ENDPOINTS ================= */

// GET Contacts
app.get("/api/contacts", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM contacts ORDER BY created_at DESC");
    res.status(200).json({
      success: true,
      data: result.rows,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

// DELETE Contact
app.delete("/api/contacts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query("DELETE FROM contacts WHERE id = $1 RETURNING *", [id]);
    if (result.rowCount === 0) {
      return res.status(404).json({ success: false, message: "Contact not found" });
    }
    res.status(200).json({
      success: true,
      message: "Contact deleted successfully",
      data: result.rows[0],
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

// GET Career Applications
app.get("/api/career", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM career_applications ORDER BY created_at DESC");
    res.status(200).json({
      success: true,
      data: result.rows,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

// DELETE Career Application
app.delete("/api/career/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query("DELETE FROM career_applications WHERE id = $1 RETURNING *", [id]);
    if (result.rowCount === 0) {
      return res.status(404).json({ success: false, message: "Application not found" });
    }
    res.status(200).json({
      success: true,
      message: "Application deleted successfully",
      data: result.rows[0],
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

// GET Foundation Applications
app.get("/api/foundation", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM foundation_applications ORDER BY created_at DESC");
    res.status(200).json({
      success: true,
      data: result.rows,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

// DELETE Foundation Application
app.delete("/api/foundation/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query("DELETE FROM foundation_applications WHERE id = $1 RETURNING *", [id]);
    if (result.rowCount === 0) {
      return res.status(404).json({ success: false, message: "Application not found" });
    }
    res.status(200).json({
      success: true,
      message: "Application deleted successfully",
      data: result.rows[0],
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

/* ================= SERVER ================= */

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  await ensureDatabaseExists();
  initTables();
  console.log(`Server running on port ${PORT}`);
});