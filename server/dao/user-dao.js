const User = require("../models/user.model");

const get = async (userId) => {
  try {
    const user = await User.findById(userId).exec();
    return user;
  } catch (error) {
    throw { code: "failedToReadUser", message: error.message };
  }
};

const create = async (user) => {
  try {
    const newUser = new User({...user});
    await newUser.save();
    return newUser;
  } catch (error) {
    throw { code: "failedToCreateUser", message: error.message };
  }
}

const update = async (user) => {
  try {
    const currentUser = await get(user.id);
    if (!currentUser) return null;

    const currentUserObj = currentUser.toObject();

    const newUser = { ...currentUserObj, ...user };
    const result = await User.updateOne({_id: user.id}, newUser);

    return result;
  } catch (error) {
    throw { code: "failedToUpdateUser", message: error.message };
  }
}

const remove = async (userId) => {
  try {
    const result = await User.deleteOne({_id: userId}).exec();
    return result;
  } catch (error) {
    throw { code: "failedToRemoveUser", message: error.message };
  }
}

const list = async () => {
  try {
    const allUsers = await User.find({});
    return allUsers;
  } catch (error) {
    throw { code: "failedToListUsers", message: error.message };
  }
}

module.exports = {
  get,
  create,
  update,
  remove,
  list,
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
  