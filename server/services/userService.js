import { JWT_SECRET } from "../constants.js";
import User from "../models/User.js";
import jwt from 'jsonwebtoken';

const userService = {
    async create(username, email, password) {
        const user = await User.findOne({ $or: [{email}, {username}] });

        if(user) {
            throw new Error('User already exists!')
        }


        const newUser = User.create({username, email, password});

        return this.generateToken(newUser);
    },

    async login(email, password) {
        const user = await User.findOne({email});

        if(!user) {
            throw new Error('Invalid user or password!');
        }

        const isValid = await bcrypt.compare(password, user.password);

        if(!isValid) {
            throw new Error('Invalid user or password!');
        }

        return this.generateToken(user);

    },

    generateToken(user) {
        const payload = {
            _id: user._id,
            email: user.email,
            username: user.username
        };

        const header = { expiresIn: '2h' };

        const token = jwt.sign(payload, JWT_SECRET, header);

        return token;
    }
}

export default userService;