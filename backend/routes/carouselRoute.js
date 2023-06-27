const router = require('express').Router();
const { Router } = require('express');
const { model } = require('mongoose');
const Slide = require('../models/slidemodel.js');

//Get
router.route("/carousel").get((req, res) => {
    const limit = parseInt(req.query.slides) || 10;
    Slide.find().limit(limit)
    .then((slides) => res.json(slides))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;