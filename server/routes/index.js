const router = require("express").Router();
const mongoose = require("mongoose");
const Words = require("../models/Words");

router.post("/words", async (req, res) => {
    try {
        const newWordlist = await new Words(req.body);
        const loadWordlist = await newWordlist.save();
        res.json("saved successfully");
    }
    catch {
        res.json(err);
    }
})

router.get("/words/english", async (req, res) => {
    try {
        const data = await Words.find({language: "english"});
        const englishWords = data[0].words;
        res.send(englishWords);
    }
    catch {
        res.send("jeje");
    }
})

router.get("/words/portuguese", async (req, res) => {
    try {
        const data = await Words.find({language: "portuguese"});
        const portugueseWords = data[0].words;
        res.send(portugueseWords);
    }
    catch {
        res.send("jeje");
    }
})

router.get("/words/spanish", async (req, res) => {
    try {
        const data = await Words.find({language: "spanish"});
        const portugueseWords = data[0].words;
        res.send(portugueseWords);
    }
    catch {
        res.send("jeje");
    }
})

module.exports = router;

