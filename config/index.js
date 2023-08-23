require("dotenv/config")

const {env} = process

const config = {
    PORT:env.PORT,
    jwtsecretkey : env.jwtsecretkey
}

module.exports = config