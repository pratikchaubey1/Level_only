const mongoose = require("mongoose");
const Product = require("./Product");
const Order_ItemSchema = new mongoose.Schema({
  ProductID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  Quantity: {
    type: Number,
    required: true,
  },
});
const OderSchema = new mongoose.Schema({
  Price: {
    type: Number,
    required: true,
  },
  Customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  Order_Items: {
    type: [Order_ItemSchema],
    required: true,
  },
  Status:{
    type:String,
    enum:['Pending','Cancel','Deliver']
  },
  Address:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"Address",
    required: true
  }
});

const Order = mongoose.model('Oder',OderSchema)
module.exports = Order;