import Guide from "../models/Guide.js"


const guideService = {
    getAll() {
        return Guide.find();
    },

    getOne(trailName) {
        return Guide.find({name: trailName});
    }
}

export default guideService;