const asyncHandler = require('express-async-handler');
const User = require('../Models/usserModel');
const generateToken = require("../config/generateToken");



const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, pic } = req.body;
    if (!name || !email || !password) {
        res.status(400);
        throw new Error("Please Enter all the required fields");

    }

    //checking the user already exists or not
    const userExists = await User.findOne({ email }); //query in mongodb
     //if user already exists throw error else create new user
    
    if (userExists) {
        res.status(400);
        throw new Error("User already exists");
    }

    const user = await User.create({
        name, email, password, pic,
    });

    if (user) { //if user has something i.e. not empty
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            pic: user.pic,
            token: generateToken(user._id),
        });

    } else {
        res.status(400);
        throw new Error("Failed to Create the user");
    }
}); 

const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body; //to login the user

    const user = await User.findOne({ email });//find the user if it exists in the data base or not
    
    //if the user exists then the password that they have entered matches with the password in the database

    if (user &&(await user.matchPassword(password))) { 
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            pic: user.pic,
            token: generateToken(user._id),
        });
    } else {
        res.status(401);
        throw new Error("Invauld Email or Password");

    }

})

module.exports = { registerUser, authUser };