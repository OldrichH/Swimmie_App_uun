const express = require("express");
const router = express.Router();

const GetAbl = require("../abl/swimmingRecord/getAbl");
const GetByUserIdAbl = require("../abl/swimmingRecord/getByUserIdAbl");
const CreateAbl = require("../abl/swimmingRecord/createAbl");
const UpdateAbl = require("../abl/swimmingRecord/updateAbl");
const DeleteAbl = require("../abl/swimmingRecord/deleteAbl");

router.get("/get", GetAbl);
router.get("/getByUserId", GetByUserIdAbl);
router.post("/create", CreateAbl);
router.post("/update", UpdateAbl);
router.post("/delete", DeleteAbl);

module.exports = router;
