const Ajv = require("ajv");
const ajv = new Ajv();

const swimmingStyleDao = require("../../dao/swimmingStyle-dao.js");

const schema = {
  type: "object",
  properties: {
    id: { type: "string"},
  },
  required: ["id"],
  additionalProperties: false,
};

async function GetAbl(req, res) {
  try {
    const reqParams = req.query?.id ? req.query : req.body;

    const valid = ajv.validate(schema, reqParams);
    if (!valid) {
      res.status(400).json({
        code: "dtoInIsNotValid",
        message: "dtoIn is not valid",
        validationError: ajv.errors,
      });
      return;
    }

    // read swimming style by given id
    const style = await swimmingStyleDao.get(reqParams.id);
    if (!style) {
      res.status(404).json({
        code: "swimmingStyleNotFound",
        message: `Swimming style ${reqParams.id} not found`,
      });
      return;
    }

    res.json(style);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}

module.exports = GetAbl;
