exports.up = function(knex, Promise) {
  return knex.schema.createTable("hero", hero => {
      hero.increments();
      hero.integer("movies");
      hero.string("hero");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("hero");
};