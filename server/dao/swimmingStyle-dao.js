const SwimmingStyle = require("../models/swimmingStyle.model");

const get = async (styleId) => {
  try {
    const user = await SwimmingStyle.findById(styleId).exec();
    return user;
  } catch (error) {
    throw { code: "failedToReadSwimmingStyle", message: error.message };
  }
};

const create = async (style) => {
    try {
      const newStyle = new SwimmingStyle({...style});
      await newStyle.save();
      return newStyle;
    } catch (error) {
      throw { code: "failedToCreateUser", message: error.message };
    }
  }

const list = async () => {
    try {
      const allStyles = await SwimmingStyle.find({});
      return allStyles;
    } catch (error) {
      throw { code: "failedToListSwimmingStyle", message: error.message };
    }
};

module.exports = {
    get,
    create,
    list,
  };