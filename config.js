require("dotenv").config();
const { env } = process;
module.exports = {
    PORT: env.PORT,
    MONGODB_URL: env.MONGODB_URL,
}