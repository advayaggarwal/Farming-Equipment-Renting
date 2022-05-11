const mongoose = require("mongoose");
const ItemSchema = mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  metamask_account: {
    type: String,
    required: true,
  },
});
const Item = mongoose.model("Item", ItemSchema);
module.exports = Item;
