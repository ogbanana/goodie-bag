const router = require('express').Router();
const { Candy } = require('../db');

router.get('/', async (req, res, next) => {
  try {
    const candies = await Candy.findAll();
    console.log('HERE!!! WHERE ARE THE CANDIES?');
    res.json(candies);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
