const mongoose = require("mongoose");

const SwimmingStyleSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
  }
);

const SwimmingStyle = mongoose.model("SwimmingStyle", SwimmingStyleSchema);

module.exports = SwimmingStyle;