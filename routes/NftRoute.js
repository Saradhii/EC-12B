const Nft = require("../models/NftSchema");
const Router = require("express");
const multer = require("multer");
const NftRoute = Router();


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './Nfts')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.originalname);
    }
  })
  
  const upload = multer({ storage: storage })

NftRoute.post("/newnft", upload.single("nft"),async(req,res)=>{
    const {name} = req.body;
    const nft = req.file.originalname;
    const newnft = new Nft({
        name,
        nft,
    })
    await newnft.save();
    return res.send("success");
});

NftRoute.get("/getnfts",async(req,res)=>{
    const docs = await Nft.find();
    return res.send(docs);
})


module.exports=NftRoute;