
exports.up = function(knex, Promise) {
    return knex.schema.createTable('customers', function (table) {
        table.increments();
        table.string('email').notNullable();

        table.integer('user_id').unsigned().notNullable();
        table.foreign('user_id').references('users.id').onDelete('CASCADE');
    }); 
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('customers');
};
