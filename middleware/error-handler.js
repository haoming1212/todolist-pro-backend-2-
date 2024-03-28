const { error } = require("console");
const util = require("util");

module.exports = () => {
    return (error, request, response, next) => {
        return status(500).json({
            error: util.format(error),
        })
    }
}