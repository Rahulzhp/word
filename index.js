
const express = require("express");
const app = express();
const cors = require("cors");
const {connection}=require("./Config/db")
const randomWords = require('random-words');
const {usersRoute}=require("./Router/route")
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
app.use("/user",usersRoute)
app.get('/randomword',async(req,res)=>{
      try{
        res.send(randomWords())
      }
      catch{
         res.send("err")
      }
})
app.get("/", (req, res) => {
  res.send("Welcome Home Page");
});

app.listen(4500, async () => {
  try {
    await connection;
    console.log("Connected to the db");
  } catch (er) {
    console.log(er);
  }
  console.log("Server is running at port 4500");
});