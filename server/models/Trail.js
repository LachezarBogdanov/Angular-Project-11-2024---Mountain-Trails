import { Schema, Types, model } from "mongoose";

const trailsSchema = new Schema({
    img: String,
    name: String,
    difficulty: String,
    description: String,
    guide: String,
    duration: Number,
    mountain: String,
    type: String,
    price: Number,
    mileage: Number,
    owner: {
        type: Types.ObjectId,
        ref: 'User'
    },
    likes: [{
        type: Types.ObjectId,
        ref: 'User'
    }]
})

const Trail = model('Trail', trailsSchema);

export default Trail;