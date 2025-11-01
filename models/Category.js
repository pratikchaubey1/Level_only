const mongoose = require("mongoose");
//   Name:
//   Price:
//   Img:
//   category:
//   Description:

const categorySchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const category =  mongoose.model('category', categorySchema)
module.exports = category;