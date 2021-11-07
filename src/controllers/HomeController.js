const isUrl = require("is-url");
const crypto = require("crypto");
const { v4 } = require("uuid");
const Url = require("../models/UrlModel");
module.exports = {
    HomeGET(req, res) {
        res.status(200).render("home", {
            ok: true,
            message: "Ok"
        });
    },
    async HomePOST(req, res) {
        try {
            let { url } = req.body;
            let isUrlTrue = isUrl(url);
            if(!isUrlTrue) throw new Error("Url is invalid");
            let shortUrl = crypto.randomBytes(2).toString("hex");
            let urlDoc = await Url.create({
                url_id: v4(),
                url: shortUrl,
                redirectURL: url
            })
            res.status(200).json({
                ok: true,
                url: urlDoc._doc.url
            });
        } catch(err) {
            res.status(400).json({
                ok: false,
                message: err.message
            })
        }
    },
    async HomeUrlGET(req, res) {
        try {
            let { url } = req.params;
            let urlDoc = await Url.findOne({
                url
            });
            if(!urlDoc) throw new Error("url is not found");
            res.status(200).redirect(urlDoc._doc.redirectURL);
        } catch (err) {
            res.status(400).json({
                ok: false,
                messaage: err.message
            })
        }
    }
}