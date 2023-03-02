const mongoose=require("mongoose");

const RandomWord=mongoose.Schema({
		"name": String,
		"score" : Number,
		"level" : String,
		
})

const WordModel=mongoose.model("random",RandomWord);

module.exports={
    WordModel
}