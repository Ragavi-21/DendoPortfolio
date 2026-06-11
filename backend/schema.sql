-- ============================================================
--  Database schema for the Work Portfolio backend
--  Run this once against your PostgreSQL database.
-- ============================================================

-- 1. Contacts (Contact page  ->  POST /api/contact)
CREATE TABLE IF NOT EXISTS contacts (
  id            SERIAL PRIMARY KEY,
  first_name    VARCHAR(100),
  last_name     VARCHAR(100),
  email         VARCHAR(150),
  country_code  VARCHAR(10),
  phone         VARCHAR(30),
  subject       VARCHAR(100),
  message       TEXT,
  created_at    TIMESTAMP DEFAULT NOW()
);

-- 2. Career applications (Career page  ->  POST /api/career)
CREATE TABLE IF NOT EXISTS career_applications (
  id          SERIAL PRIMARY KEY,
  first_name  VARCHAR(100),
  last_name   VARCHAR(100),
  phone       VARCHAR(30),
  email       VARCHAR(150),
  created_at  TIMESTAMP DEFAULT NOW()
);

-- 3. Foundation applications (Foundation page  ->  POST /api/foundation)
CREATE TABLE IF NOT EXISTS foundation_applications (
  id          SERIAL PRIMARY KEY,
  first_name  VARCHAR(100),
  last_name   VARCHAR(100),
  phone       VARCHAR(30),
  email       VARCHAR(150),
  created_at  TIMESTAMP DEFAULT NOW()
);
