const Ajv = require("ajv");
const addFormats = require("ajv-formats").default;
const ajv = new Ajv();
addFormats(ajv);

const userDao = require("../../dao/user-dao.js");

const schema = {
  type: "object",
  properties: {
    id: { type: "string" },
    name: { type: "string", minLength: 3 },
    surname: {type: "string", minLength: 3},
    email: { type: "string", format: "email" },
    personalLimit: {type: "string"},
  },
  required: ["id"],
  additionalProperties: false,
};

async function UpdateAbl(req, res) {
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

    const userList = await userDao.list();
    const emailExists = userList.some(
      (u) => u.email === user.email && u.id !== user.id
    );
    if (emailExists) {
      res.status(400).json({
        code: "emailAlreadyExists",
        message: `User with email ${user.email} already exists`,
      });
      return;
    }

    const updatedUser = await userDao.update(user);
    if (!updatedUser) {
      res.status(404).json({
        code: "userNotFound",
        message: `User ${user.id} not found`,
      });
      return;
    }

    res.json(updatedUser);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}

module.exports = UpdateAbl;
