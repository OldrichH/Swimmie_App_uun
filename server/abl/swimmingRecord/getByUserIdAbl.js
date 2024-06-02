const Ajv = require("ajv");
const ajv = new Ajv();

const swimmingRecordDao = require("../../dao/swimmingRecord-dao.js");

const schema = {
  type: "object",
  properties: {
    userId: { type: "string"},
  },
  required: ["userId"],
  additionalProperties: false,
};

async function GetAbl(req, res) {
  try {
    // get request query or body
    const reqParams = req.query?.userId ? req.query : req.body;

    // validate input
    const valid = ajv.validate(schema, reqParams);
    if (!valid) {
      res.status(400).json({
        code: "dtoInIsNotValid",
        message: "dtoIn is not valid",
        validationError: ajv.errors,
      });
      return;
    }

    // read swimmingRecord by given id
    const swimmingRecord = await swimmingRecordDao.getByUserId(reqParams.userId);
    if (!swimmingRecord) {
      res.status(404).json({
        code: "swimmingRecordNotFound",
        message: `Swimming Records with user id ${reqParams.userId} not found`,
      });
      return;
    }

    res.json({records: swimmingRecord});
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}

module.exports = GetAbl;