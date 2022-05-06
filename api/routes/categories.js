const router = require("express").Router();
// const Category = require("../models/Category");

// Ignora esto, solo lo hice porque no tengo la bd en Mongo...
const categories = [
  {
    name: "Technology",
  },
  {
    name: "Business",
  },
  {
    name: "Entertainment",
  },
];

router.post("/", async (req, res) => {
  // const newCat = new Category(req.body);
  const newCat = { name: req.body.name };
  try {
    const savedCat = categories.push(newCat);
    res.status(200).json(newCat);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    // const cats = await Category.find();
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
