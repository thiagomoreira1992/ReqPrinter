exports.up = knex => knex.schema.createTable("exams", table => {
    table.increments('id');
    table.integer('pac_id').references('id').inTable('patients').onDelete('CASCADE');
    table.integer('acc_number');
    table.date('exame_date');
    table.text('name');
    table.text('modality');
})

exports.down = knex => knex.schema.dropTable("exams");