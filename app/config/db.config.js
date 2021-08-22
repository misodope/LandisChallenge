module.exports = {
  HOST: process.env.DATABASE_URL || "localhost",
  USER: process.env.DATABASE_USER || "misodope",
  PASSWORD: process.env.DATABASE_PASSWORD || null,
  DB: process.env.DATABASE || "landis_challenge",
  port: process.env.DATABASE_PORT || 5432,
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
