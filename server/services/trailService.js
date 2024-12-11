import Trail from "../models/Trail.js"


const trailService = {
    create(img, name, difficulty, description, guide, duration, mountain, type, price, mileage, userId) {
        return Trail.create({img, name, difficulty, description, guide, duration, mountain, type, price, mileage, owner: userId});
    },

    getOne(trailId) {
        return Trail.findById(trailId);
    },

    update(trailData, trailId) {
        return Trail.findByIdAndUpdate(trailId, trailData, {runValidators: true});
    },

    deleteTrail(trailId) {
        return Trail.findByIdAndDelete(trailId);
    },

    like(trailId, userId) {
        return Trail.findByIdAndUpdate(trailId, { $push: {likes: userId} })
    }
}

export default trailService;