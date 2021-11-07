const express = require("express");
const path = require("path");
const fs = require("fs");
const morgan = require("morgan");
const mongo = require("./src/modules/mongo");
const {PORT} = require("./config");
const app = express();
mongo()
// settings
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src", "views"));
// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("tiny"));
app.use("/public", express.static(path.join(__dirname, "src", "public")));
// Routes
 fs.readdir(path.join(__dirname, "src", "routes"), (err, files) => {
    if(!err) {
        files.forEach(file => {
            let routePath = path.join(__dirname, "src", "routes", file);
            const Router = require(routePath);
            if(Router.path && Router.router) {
                app.use(Router.path, Router.router);
            }
        })
    }
});
app.listen(PORT, () => console.log(`Server is running on port:${PORT}`))