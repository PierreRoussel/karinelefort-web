module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'db4free.net'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'karinelefort'),
      user: env('DATABASE_USERNAME', 'karinelefort'),
      password: env('DATABASE_PASSWORD', '645ZEOtio'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
