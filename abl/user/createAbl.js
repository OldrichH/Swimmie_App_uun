const Ajv = require("ajv");
const addFormats = require("ajv-formats").default;
const ajv = new Ajv();
addFormats(ajv);

//const validateDateTime = require("../../utils/validate-date-time.js");
//ajv.addFormat("date-time", { validate: validateDateTime });

const userDao = require("../../dao/user-dao");

const schema = {
  type: "object",
  properties: {
    name: { type: "string"},
    surname: {type: "string"},
    email: { type: "string", format: "email" },
    personalLimit: {type: "string"},
  },
  required: ["name", "surname", "email"],
  additionalProperties: false,
};

async function CreateAbl(req, res) {
  try {
    let user = req.body;

    // validate input
    const valid = ajv.validate(schema, user);
    if (!valid) {
      res.status(400).json({
        code: "dtoInIsNotValid",
        message: "dtoIn is not valid",
        validationError: ajv.errors,
      });
      return;
    }

    // const userList = userDao.list();
    // const emailExists = userList.some((u) => u.email === user.email);
    // if (emailExists) {
    //   res.status(400).json({
    //     code: "emailAlreadyExists",
    //     message: `User with email ${user.email} already exists`,
    //   });
    //   return;
    // }

    // If user doesn't fill his own personal limit default value will be set
    if (!user.personalLimit) {
      user.personalLimit = "1500";
    }

    user = userDao.create(user);
    res.json(user);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}

module.exports = CreateAbl;
