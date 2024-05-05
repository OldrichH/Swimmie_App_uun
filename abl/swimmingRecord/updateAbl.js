const Ajv = require("ajv");
const addFormats = require("ajv-formats").default;
const ajv = new Ajv();
addFormats(ajv);

const swimmingRecordDao = require("../../dao/swimmingRecord-dao.js");


const schema = {
  type: "object",
  properties: {
    id: { type: "string", minLength: 32, maxLength: 32 },
    userId: { type: "string" },
    swumMeters: {type: "number"},
    calories: {type: "number"},
    swimmingTime: {type: "string"},
    styleId: {type: "string"},
    date: {type: "string", format: "date-time" },
  },
  required: ["id"],
  additionalProperties: false,
};

async function UpdateAbl(req, res) {
  try {
    let swimmingRecord = req.body;

    // validate input
    const valid = ajv.validate(schema, swimmingRecord);
    if (!valid) {
      res.status(400).json({
        code: "dtoInIsNotValid",
        message: "dtoIn is not valid",
        validationError: ajv.errors,
      });
      return;
    }

    const updatedSwimmingRecord = swimmingRecordDao.update(swimmingRecord);
    if (!updatedSwimmingRecord) {
      res.status(404).json({
        code: "swimmingRecordNotFound",
        message: `Swimming Record ${swimmingRecords.id} not found`,
      });
      return;
    }

    res.json(updatedSwimmingRecord);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}

module.exports = UpdateAbl;
