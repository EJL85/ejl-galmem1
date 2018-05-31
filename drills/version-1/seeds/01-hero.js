exports.seed = function(knex, Promise) {
  return knex("hero").del().then(() => {
      return knex("hero").insert([{
          id: 1,
          movies: "10",
          hero: "Batman"
      },{
          id: 2,
          movies: "5",
          hero: "Wolverine"
      },{
          id: 3,
          movies: "2",
          hero: "Deadpool"
      }]);
  }).then(() => {
      return knex.raw("ALTER SEQUENCE hero_id_seq RESTART WITH 4;");
  });
};