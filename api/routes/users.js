const router = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');

// update user
router.put("/:id", async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        if (req.body.password) {
            try {
                const salt = await bcrypt.genSalt(10);
                const hashedPass = await bcrypt.hash(req.body.password, salt);
                req.body.password = hashedPass;

            } catch (err) {
                return res.status(500).json(err);
            }
        }

        try {
            const user = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            });
            res.status(200).json("Updated profile successfully");
        } catch (err) {
            return res.status(500).json(err);
        }
    }
    else return res.status(403).json("You can update you profile only.");
});

// delete user
router.delete("/:id", async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        try {
            const user = await User.findByIdAndDelete(req.params.id);
            res.status(200).json("Deleted profile successfully");
        } catch (err) {
            return res.status(500).json(err);
        }
    }
    else return res.status(403).json("You can delete your profile only.");
});

// get user
router.get("/:id", async (req, res) =>{
    try {
        const user = await User.findById(req.params.id);
        const {password, updatedAt, ...publicInfo} = user._doc;
        res.status(200).json(publicInfo);
    } catch (err) {
         res.status(500).json(err);
    }
});

// follow user
router.put("/:id/follow", async (req, res)=>{
    if(req.params.id !== req.body.userId){
        try{
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);

            if(!user.followers.includes(req.body.userId)){
                await user.updateOne({$push: {followers: req.body.userId}});
                await currentUser.updateOne({$push: {following: req.params.id}});
                res.status(200).json("Follow success.");
            }else{
                res.status(403).json("You are already following this user.")
            }
        }catch(err){
            res.status(500).json(err);
        }
    }else{
         res.status(500).json("You cannot follow yourself.")
    }
});
 
// unfollow
router.put("/:id/unfollow", async (req, res)=>{
    if(req.params.id !== req.body.userId){
        try{
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);

            if(user.followers.includes(req.body.userId)){
                await user.updateOne({$pull: {followers: req.body.userId}});
                await currentUser.updateOne({$pull: {following: req.params.id}});
                res.status(200).json("Unfollowed successfully.");
            }else{
                res.status(403).json("You are not following this user already.")
            }
        }catch(err){
            res.status(500).json(err);
        }
    }else{
         res.status(500).json("You cannot unfollow yourself.")
    }
});

module.exports = router

