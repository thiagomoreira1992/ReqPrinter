
exports.up = knex => knex.schema.createTable("prints", table => {

    table.increments('id');
    table.integer('pac_id').references('id').inTable('patients').onDelete ('CASCADE');
    table.integer('exame_id').references('id').inTable('exams').onDelete ('CASCADE');
    table.text('file_name');

    table.timestamp('created_at').default(knex.fn.now);
    table.timestamp('updated_at').default(knex.fn.now);
});

exports.down = knex => knex.schema.dropTable("prints");