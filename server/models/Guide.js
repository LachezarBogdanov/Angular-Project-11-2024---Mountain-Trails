import { model, Schema } from "mongoose";


const guideSchema = new Schema({
    name: String,
    nation: String,
    experience: Number,
    img: String,
})

const Guide = model('Guide', guideSchema);

export default Guide;