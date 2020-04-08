exports.up = function(knex) {
    return knex.schema
        .createTable('car', function (table) {
            table.string('id');
            table.string('brand', 100);
            table.string('model', 100);
            table.integer('year');
            table.boolean('deleted');
            table.timestamp('createdAt');
            table.timestamp('updatedAt');
            table.timestamp('deletedAt');
            table.integer('__v');
        });
};

exports.down = function(knex) {
    return knex.schema
        .dropTable('car');
};