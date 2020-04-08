exports.up = function(knex) {
    return knex.schema
        .createTable('employe', function (table) {
            table.string('id');
            table.string('name', 100);
            table.string('job', 100);
            table.integer('salary');
            table.boolean('deleted');
            table.timestamp('createdAt');
            table.timestamp('updatedAt');
            table.timestamp('deletedAt');
            table.integer('__v');
        });
};

exports.down = function(knex) {
    return knex.schema
        .dropTable('employe');
};