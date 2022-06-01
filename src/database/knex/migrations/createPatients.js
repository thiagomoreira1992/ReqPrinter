exports.up = knex => knex.schema.createTable("patients", table => {
    table.increments('id');
    table.integer('patientId');
    table.text('name');
    table.date('birth_date');
    table.timestamp('created_at').default(knex.fn.now);
    table.timestamp('updated_at').default(knex.fn.now);
});

exports.down = knex => knex.schema.dropTable("patients");