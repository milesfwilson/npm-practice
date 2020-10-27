import mongoose from "mongoose"
const Schema = mongoose.Schema

const House = new Schema({
  levels: { type: Number, required: true },
  bathrooms: { type: Number, required: true },
  bedrooms: { type: Number, required: true },
  year: { type: Number, required: true, min: 1900, max: 2021 },
  price: { type: Number, required: true, min: 1 },
  imgUrl: { type: String, required: true, default: "http://placehold.it/200" },
  description: { type: String, maxlength: 200 }
},
  { timestamps: true, toJSON: { virtuals: true } }
)

export default House