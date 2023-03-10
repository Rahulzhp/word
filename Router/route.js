const express = require("express");
const usersRoute = express.Router();
const { WordModel } = require("../Model/shema");


usersRoute.get("/getdata", async (req, res) => {
 try{
     let data=await WordModel.find().sort({"score":-1})
     res.send(data)
 }
 catch{
    res.send("err")
 }
   
});

usersRoute.post("/postdata", async (req, res) => {
  const data = req.body;
  try {
    const userdata = new WordModel(data);
    await userdata.save();
    res.status(201).json({ massage: "Post Successful", userdata });
  } catch (err) {
    res.status(401).json({
      err,
      message: "Something went wrong",
    });
  }
});

module.exports = {
  usersRoute,
};