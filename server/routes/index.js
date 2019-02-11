const router = require("express").Router();
const userController = require("./../controllers/user.controller");

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/signup", (req, res) => {
  res.render("index");
});

router.post("/api/signup", userController.signup);

module.exports = router;
