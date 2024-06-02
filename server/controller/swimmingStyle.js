const express = require("express");
const router = express.Router();

const GetAbl = require("../abl/swimmingStyle/getAbl");
const ListAbl = require("../abl/swimmingStyle/listAbl");
const CreateAbl = require("../abl/swimmingStyle/createAbl");

router.get("/get", GetAbl);
router.get("/list", ListAbl);
router.post("/create", CreateAbl);

module.exports = router;