import { Schema, model } from "mongoose";

const trailsSchema = new Schema({
    img: String,
    name: String,
    difficulty: String,
    description: String,
    type: String,
    price: Number,
    mileage: Number,
})

const Trail = model('Trail', trailsSchema);

export default Trail;