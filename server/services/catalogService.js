import Trail from "../models/Trail.js"

const catalogService = {
    getTrails() {
        return Trail.find();
    }
}

export default catalogService;