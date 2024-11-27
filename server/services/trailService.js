import Trail from "../models/Trail.js"


const trailService = {
    create(description, difficulty, img, mileage, name, price, type) {
        return Trail.create({img, name, difficulty, description, type, price, mileage});
    }
}

export default trailService;