// Update with your config settings.

module.exports = {

    client: 'postgresql',
    connection: {
      database: 'tasks',
      user:     'postgres',
      password: '830110'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }

};
