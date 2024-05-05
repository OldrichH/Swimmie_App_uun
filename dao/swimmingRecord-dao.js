const SwimmingRecord = require("../models/swimmingRecord.model");

const get = async (recordId) => {
  try {
    const record = await SwimmingRecord.findById(recordId);
    return record;
  } catch (error) {
    throw { code: "failedToReadRecord", message: error.message };
  }
};

const getByUserId = async (userId) => {
  try {
    const record = await SwimmingRecord.find({userId: userId});
    return record;
  } catch (error) {
    throw { code: "failedToReadRecord", message: error.message };
  }
};

const create = async (record) => {
  try {
    const newRecord = new SwimmingRecord({ ...record });
    await newRecord.save();

    return newRecord;
  } catch (error) {
    throw { code: "failedToCreateRecord", message: error.message };
  }
};


const update = async (record) => {
  try {
    const currentRecord = await get(record.id);
    if (!currentRecord) return null;

    const currentRecordObj = currentRecord.toObject();

    const newRecord = { ...currentRecordObj, ...record };
    const result = await SwimmingRecord.updateOne({_id: record.id}, newRecord);
    return result 
  } catch (error) {
    throw { code: "failedToUpdateRecord", message: error.message };
  }
}

const remove = async (recordId) => {
  try {
    //const result = await SwimmingRecord.deleteOne(recordId).exec();
    const result = await SwimmingRecord.deleteOne({_id: recordId}).exec();
    return result;
  } catch (error) {
    throw { code: "failedToRemoveRecord", message: error.message };
  }
}

module.exports = {
  get,
  getByUserId,
  create,
  update,
  remove,
};
