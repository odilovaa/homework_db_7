const { query } = require("express");
const serviceQuery = require("../query/service.query");
const CustomError = require("../util/custom-error");
const {fetch, fetchOne} = require("../util/pg");
const serviceValidator = require("../validation/service.validation");

const add = async (req, res, next) =>
{
    try {
        const {title, cost} = req.body;

        const result = await serviceValidator.add({title, cost});
        if (result.error) throw new CustomError(result.error.message, 400);

        const data = await serviceQuery.add(title, cost, req.c_id);

        res.status(201).json({message: "Success", data});

    } catch (error) {
        next(error);
    }
};



const getall = async (req, res, next) =>
{
    try {
        const datas = await serviceQuery.getall();
    
        res.json({message: "Success", data: datas});
    } catch (error) {
        next(error);
    }
};


const getbyid = async (req, res, next) =>
{
    try {
        const {service_id} = req.params;

        const data = await serviceQuery.getbyid(service_id);
    
        await serviceQuery.beginTransaction();
    
        await serviceQuery.decreaseBalance(req.c_id, data.cost);
        await serviceQuery.increaseBalance(user_id, data.cost);
    
        await serviceQuery.createTransaction(req.c_id, data.cost, user_id);
    
        await serviceQuery.commitTransaction();
    
        res.status(201).json({message: "SUCCESS"});
      } catch (error) {
        await query.rollBackTransaction();
        res.status(500).json({message: "Internal Server Error"});
      }
};

module.exports = {
    add, getall, getbyid
};