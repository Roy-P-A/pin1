const express = require("express");
const UserController = require("../controllers/userController");

const router = express.Router();

router.get("/create", UserController.createUser);

module.exports = router;
