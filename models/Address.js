const { number } = require("framer-motion");
const mongoose = require("mongoose");
//city
//addres
//housenumber
//area
//pincode
//mobile_number
//state
//Country
//name

const AddressSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Address: {
    type: String,
    required: true,
  },
  House_number: {
    type: Number,
    required: true,
  },
  Area: {
    type: String,
    required: true,
  },
  Pin_code: {
    type: Number,
    required: true,
  },
  Mobile_number:{
    type: String,
    required: true,
  },
  Country:{
      type: String,
    required: true
  },
  State:{
    type: String,
    required: true
  }
});

const Address = mongoose.model('Address',AddressSchema);
module.exports = Address;