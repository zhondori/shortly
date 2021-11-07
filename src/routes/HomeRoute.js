const { HomeGET, HomePOST, HomeUrlGET } = require("../controllers/HomeController");

const router = require("express").Router();

router.get("/", HomeGET);
router.get("/:url", HomeUrlGET);
router.post("/", HomePOST);

module.exports = {
    path: "/",
    router
}