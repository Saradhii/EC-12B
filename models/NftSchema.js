const { Schema, model} = require("mongoose");

const NftSchema = ({
   name:String,
   nft:String,
});

const Nft = model("nfts",NftSchema);

module.exports = Nft;