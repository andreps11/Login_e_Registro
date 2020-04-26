module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'login_registro',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
