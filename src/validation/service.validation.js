const Joi = require("joi")

class registerValidator {
    static async add({title, cost})
    {
        const {error} = Joi.object({
            title: Joi.string().max(64).required(),
            cost: Joi.string().max(100).required(),
        }).validate({title, cost});

        if (error) {
            return {error}
        } else {
            return {error: false}
        }
    }
}

module.exports = registerValidator;