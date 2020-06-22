const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      require: true,
    },
    lastName: {
      type: String,
      // required: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      default: "Consumer",
      enum: ["Consumer", "Farmer", "Doctor"],
    },
    password: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    gender: {
      type: String,
    },
    d_o_b: {
      type: String,
    },
    mobile_number: {
      type: String,
    },
    address: {
      type: String,
    },
    city: {
      type: String,
    },
    country: {
      type: String,
    },
  },
  { timestamps: true }
);

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);
