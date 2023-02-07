exports.up = function(knex) {
    return knex.schema.createTable("book", (table) => {
            table.increments("id").primary();
            table.string("title").notNullable();
            table.string("author").notNullable();
            table.date("date").notNullable();
            table.string("name").notNullable();
            table.integer("total_pages").notNullable();
            table.text("synopsis").notNullable();
        })
        .createTable("page", (table) => {
            table.increments("id").primary();
            table.integer("page_number").notNullable();
            table.integer("book_id").unsigned().notNullable();
            table.foreign("book_id").references("book.id");
            table.text("content").notNullable();
        })
};

exports.down = function(knex) {
    return knex.schema.dropTable("page")
        .dropTable("book")
};