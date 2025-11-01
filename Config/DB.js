const mongoose = require('mongoose')
const connectdb = async() => {
 try {
    mongoose.connect(process.env.MONGODB_URL)
    console.log("mongodb connected");
    
 } catch (error) {
    console.log(error);
    
 }
} 
module.exports = connectdb;