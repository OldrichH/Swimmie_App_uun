const SwimmingRecord = require("../models/swimmingRecord.model");

const get = async (recordId) => {
  try {
    const record = await SwimmingRecordModel.findById(recordId);
    return record;
  } catch (error) {
    throw { code: "failedToReadEvent", message: error.message };
  }
};

const getByUserId = async (userId) => {
  try {
    const record = await SwimmingRecordModel.find(
      (record) => record.userId === userId
    );
    return record;
  } catch (error) {
    throw { code: "failedToReadEvent", message: error.message };
  }
};

const create = async (record) => {
  try {
    const newRecord = new SwimmingRecord({ ...record });
    await newRecord.save();

    return newRecord;
  } catch (error) {
    throw { code: "failedToCreateEvent", message: error.message };
  }
};


function update(event) {
  try {
    const currentEvent = get(event.id);
    if (!currentEvent) return null;
    const newEvent = { ...currentEvent, ...event };
    const filePath = path.join(eventFolderPath, `${event.id}.json`);
    const fileData = JSON.stringify(newEvent);
    fs.writeFileSync(filePath, fileData, "utf8");
    return newEvent;
  } catch (error) {
    throw { code: "failedToUpdateEvent", message: error.message };
  }
}

// Method to remove an event from a file
function remove(eventId) {
  try {
    const filePath = path.join(eventFolderPath, `${eventId}.json`);
    fs.unlinkSync(filePath);
    return {};
  } catch (error) {
    if (error.code === "ENOENT") return {};
    throw { code: "failedToRemoveEvent", message: error.message };
  }
}

module.exports = {
  get,
  getByUserId,
  create,
  update,
  remove,
};
