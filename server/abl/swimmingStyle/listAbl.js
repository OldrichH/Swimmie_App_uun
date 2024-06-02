const swimmingStyleDao = require("../../dao/swimmingStyle-dao.js");

async function ListAbl(req, res) {
  try {
    const styleList = await swimmingStyleDao.list();
    res.json({styles: styleList});
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}

module.exports = ListAbl;
