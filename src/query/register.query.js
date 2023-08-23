const {fetch, fetchOne} = require("../util/pg");

const addQuery = 
    "insert into users(full_name, password, balance) values($1, $2, $3) returning*";

const getallQuery = "select * from users order by created_at";


module.exports = {
    add: async (full_name, password, balance) =>
      await fetchOne(addQuery, full_name, password, balance),
    getall: async () => await fetch(getallQuery),
};