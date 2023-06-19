const mongoose = require("mongoose");
const applicationSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      requires: true,
    },
    lastName: {
      type: String,
      requires: true,
    },
    email: {
      type: String,
      requires: true,
    },
    telephone: {
      type: String,
      requires: true,
    },
    gender: String,
    location: String,
    education: String,
    language: Boolean,
    programmingLanguage: String,
    job: Boolean,
    student: Boolean,
    status: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("applicant", applicationSchema);
