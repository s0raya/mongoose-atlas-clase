const express = require('express');
const router = express.Router();
const User = require('../models/user.js');

router.post('/create', async(req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).send(user);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "There was a problem trying to create a user" });
    }
}),

router.get("/", async(req, res) => {
    try {
        const users = await User.find();
        res.send(users);
    } catch (error) {
        console.error(error);
    }
});

router.put("/id/:_id", async(req, res) => {
        try {
            const user = await User.findByIdAndUpdate(req.params._id, req.body, { new: true })
            res.send({ message: "user successfully updated", user });
        } catch (error) {
            console.error(error);
        }
});

router.delete("/id/:_id", async(req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params._id);
        res.send({ message: "user deleted", user });
    } catch (error) {
        console.error(error);
        res
            .status(500)
            .send({ message: "There was a problem trying to delete a user" });
    }
});


module.exports = router;