const database = require("./database-connection");

module.exports = {
    list(){
        return database("hero").select();
    },
    read(id){
        return database("hero").select().where("id", id).first();
    },
    create(resolution){
        return database("hero")
            .insert(hero)
            .returning("*")
            .then(record => record[0]);
    },
    update(id, hero){
        return database("hero")
            .update(hero)
            .where("id", id)
            .returning("*")
            .then(record => record[0]);
    },
    delete(id){
        return database("hero").delete().where("id", id);
    }
};