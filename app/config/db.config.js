module.exports = {
  HOST: "localhost",
  USER: "misodope",
  PASSWORD: null,
  DB: "landis_challenge",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
