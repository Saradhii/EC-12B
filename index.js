const connection = require("./db/db");
const express = require("express");
const cors = require("cors");
const UserRoute = require("./routes/UserRoute");
const NftRoute = require("./routes/NftRoute");


const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(
    cors({
      origin: ["http://localhost:3000","https://e12.vercel.app"],
    })
  );
app.use("/static",express.static("./Nfts"));
app.use("/nft",NftRoute);
app.use("/user",UserRoute);

app.get("/",(req,res)=>{
  res.send("e-12 backend working....")
})


const PORT = process.env.PORT || 8060
app.listen(PORT, async () => {
    try {
      await connection;
      console.log("Connected to Database Successfully &");
    } catch (err) {
      console.log(err);
    }
    console.log("");
});

