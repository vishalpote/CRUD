import User from "../model/user.js";
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
dotenv.config();

const secret_key = process.env.SECRET_KEY;

export const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(401).json({ message: "Please Enter Email And Password..!!" });
    }

    try {
        const user = await User.findOne({$or:[{ email: email, password: password}]});

        if (!user) {
            return res.status(404).json({ message: "User Not Found Check Email And Password And Try Again ..." });
        }

        // const isMatch = await bcrypt.compare(password, user.password.substring(0,10));

        // if (!isMatch) {
        //     return res.status(401).json({ message: "Invalid Credentials..!!" });
        // }

        // Generate JWT token
        const token = jwt.sign({ userId: user._id, email: user.email }, secret_key, { expiresIn: '60s' });

        // Set the token in the response headers
        res.header('Authorization', `Bearer ${token}`);

        return res.status(200).json({ message: "User logged in successfully", token });
    } catch (error) {
        return res.status(500).json({ message: "Error: " + error.message });
    }
};
