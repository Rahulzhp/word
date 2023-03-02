const mongoose=require("mongoose");

const connection=mongoose.connect("mongodb+srv://rahuldas:rahuldas@cluster0.k1wv2x4.mongodb.net/randomword?retryWrites=true&w=majority");

module.exports={
    connection
}