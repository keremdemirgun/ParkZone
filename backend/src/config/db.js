import pg from "pg";

const { Pool } = pg;

const poolConfig = process.env.DATABASE_URL
  ? { connectionString: process.env.DATABASE_URL }
  : {
      host: process.env.DB_HOST || "localhost",
      port: Number(process.env.DB_PORT) || 5432,
      database: process.env.DB_NAME || "parkzone",
      user: process.env.DB_USER || "postgres",
      password: process.env.DB_PASSWORD,
    };

if (process.env.DATABASE_SSL === "true") {
  poolConfig.ssl = { rejectUnauthorized: false };
}

const pool = new Pool(poolConfig);

pool.on("error", (error) => {
  console.error("Unexpected PostgreSQL pool error:", error);
});

export const query = (text, params) => pool.query(text, params);

export const connectDatabase = async () => {
  const client = await pool.connect();

  try {
    await client.query("SELECT 1");
    console.log("PostgreSQL connection established");
  } finally {
    client.release();
  }
};

export default pool;
