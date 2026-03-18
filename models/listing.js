const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  image: {
    type: String,
    default: "https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg",
    set: (v) =>
      v === ""
        ? "https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg"
        : v,
  },
  price: { type: Number, required: true },
  location: { type: String, required: true },
  country: { type: String },
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
