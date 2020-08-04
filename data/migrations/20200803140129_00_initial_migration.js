exports.up = function (knex) {
  return knex.schema.createTable("colors", (tbl) => {
    tbl.increments();
    tbl.string("name", 128);
    tbl.string("hexString", 128);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("colors");
};
