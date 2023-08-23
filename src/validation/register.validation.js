const Joi = require("joi")

class registerValidator {
    static async add({full_name, password, balance})
    {
        const {error} = Joi.object({
            full_name: Joi.string().max(64).required(),
            password: Joi.string().max(100).required(),
            balance: Joi.string().max(100).required()
        }).validate({full_name, password, balance});

        if (error) {
            return {error}
        } else {
            return {error: false}
        }
    }
}


module.exports = registerValidator;