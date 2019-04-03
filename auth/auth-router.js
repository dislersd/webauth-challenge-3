const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secret = require("../auth/secret.js");
const Users = require("../users/users-model.js");

router.post("/register", async (req, res) => {
  try {
    const user = req.body;
    const hash = bcrypt.hashSync(user.password, 4);
    user.password = hash;
    const saved = await Users.add(user);
    res.status(201).json(saved);
  } catch (error) {
    res.status(500).json({ message: "error registering" });
  }
});

module.exports = router;