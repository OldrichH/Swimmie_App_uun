const User = require("../models/user.model");

const get = async (userId) => {
  try {
    const user = await User.findById(userId).exec();
    return user;
  } catch (error) {
    throw { code: "failedToReadEvent", message: error.message };
  }
};

const create = async (user) => {
  try {
    const newUser = new User({...user});
    await newUser.save();
    return newUser;
  } catch (error) {
    throw { code: "failedToCreateEvent", message: error.message };
  }
}

module.exports = {
  get,
  create,
  // update,
  // remove,
  // list,
};


// const User = require("../models/user.model");

// const get = (userId) => {
//   try {
//     const user = User.findById(userId);
//     return user;
//   } catch (error) {
//     throw { code: "failedToReadEvent", message: error.message };
//   }
// };

// // Method to write an event to a file
// function create(user) {
//   try {
//     const newUser = new User({...user});
//     newUser.save();
//     return newUser;
//   } catch (error) {
//     throw { code: "failedToCreateEvent", message: error.message };
//   }
// }

// module.exports = {
//     get,
//     create,
//     // update,
//     // remove,
//     // list,
//   };
  