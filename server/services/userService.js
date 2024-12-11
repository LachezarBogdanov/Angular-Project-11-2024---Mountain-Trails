import { JWT_SECRET } from "../constants.js";
import User from "../models/User.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const userService = {
    async create(username, email, password) {
        const user = await User.findOne({ $or: [{email}, {username}] });
        
        if(user) {
            throw new Error('user already exist')
        }


        const newUser = await User.create({username, email, password});
        
        const token = this.generateToken(newUser);
        const data = {newUser, token};

        return data;
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
        const token = this.generateToken(user);
        const data = {user, token};

        return data;

    },

    async updateUser(userId, data) {
        return await User.findByIdAndUpdate(userId, data);
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