const mongoose = require("mongoose");

const SwimmingRecordSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  swumMeters: { type: Number, required: true },
  calories: { type: Number, required: true },
  swimmingTime: {type: String, required: true},
  styleId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Style",
    required: true,
  },
  date: { type: String, required: true },
});

const SwimmingRecord = mongoose.model("SwimmingRecord", SwimmingRecordSchema);

module.exports = SwimmingRecord;
