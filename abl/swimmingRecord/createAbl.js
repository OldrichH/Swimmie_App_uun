const Ajv = require("ajv");
const addFormats = require("ajv-formats").default;
const ajv = new Ajv();
addFormats(ajv);

const validateDateTime = require("../../utils/validate-date-time.js");
ajv.addFormat("date-time", { validate: validateDateTime });

const swimmingRecordDao = require("../../dao/swimmingRecord-dao.js");


const schema = {
  type: "object",
  properties: {
    userId: { type: "string" },
    swumMeters: {type: "number"},
    calories: {type: "number"},
    swimmingTime: {type: "string"},
    styleId: {type: "string"},
    date: {type: "string", format: "date-time" },
  },
  required: ["userId", "swumMeters", "calories", "swimmingTime", "styleId", "date"],
  additionalProperties: false,
};

async function CreateAbl(req, res) {
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
    // TODO: Předělat na SwimmingStyleExists check
    // const userList = userDao.list();
    // const emailExists = userList.some((u) => u.email === user.email);
    // if (emailExists) {
    //   res.status(400).json({
    //     code: "emailAlreadyExists",
    //     message: `User with email ${user.email} already exists`,
    //   });
    //   return;
    // }

    swimmingRecord = swimmingRecordDao.create(swimmingRecord);
    res.json(swimmingRecord);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}

module.exports = CreateAbl;
