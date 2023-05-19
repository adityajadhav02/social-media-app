const router = require('express').Router();
const User = require('../models/User')
const bcrypt = require('bcrypt')

// User registration 
router.post("/register", async (req, res)=>{

    try{
        // hashing password
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt);

        // create new user
        const newUser = new User({
            username: req.body.username,
            password: hashedPass,
            email: req.body.email
        });

        const user = await newUser.save();
        res.status(200).json(user);
    }catch(err){
        res.status(500).json(err);
    }

    // await user.save();
    // res.send("Okay");
})

// User login
router.post("/login", async (req, res)=>{
    try{

        const user = await User.findOne({email: req.body.email});
        !user && res.status(404).json("User not found");

        const isValid = await bcrypt.compare(req.body.password, user.password);
        console.log(isValid);
        // !isValid && res.status(400).json("Incorrect Password");

        res.status(200).json(user);
    }
    catch(err){
        res.status(500).json(err);
    }
});

module.exports = router;

