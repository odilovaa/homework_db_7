const {fetch, fetchOne} = require("../util/pg");

const addQuery = 
    "insert into service(title, cost, user_id) values($1, $2, $3) returning*";

const getallQuery = 
    "select * from service order by created_at";

const getbyidQuery = 
    "select * from service where id = $1"


const increaseBalanceQuery =
    "update users set balance = balance + $2 where id = $1";
    
const decreaseBalanceQuery =
    "update users set balance = balance - $2 where id = $1";
    
const createTransactionQuery =
    "insert into transactions(from_id, to_id, cost)values($1, $2, $3)";

module.exports = {
    add: async (title, cost, user_id) =>
      await fetchOne(addQuery, title, cost, user_id),
    getall: async () => 
        await fetch(getallQuery),
    getbyid: async(id) =>
        await fetchOne(getbyidQuery, id),
    decreaseBalance: async (from_id, cost) =>
        await fetchOne(decreaseBalanceQuery, from_id, cost),
    increaseBalance: async (user_id, cost) =>
        await fetchOne(increaseBalanceQuery, user_id, cost),
    beginTransaction: async () => await fetchOne("BEGIN TRANSACTION"),
    rollBackTransaction: async () => await fetchOne("ROLLBACK"),
    commitTransaction: async () => await fetchOne("COMMIT"),
    createTransaction: async (from_id, cost, user_id) =>
        await fetchOne(createTransactionQuery, from_id, user_id, cost),
};