const router = require('express').Router();
const User =  require('../models/user')

const handle = require('../handlers');
router.post('/register', handle.register);

router.post('/login', handle.login);
router.get("/users", async (req, res) => {
    try {
const resy =  await User.find();
res.status(200).json(resy);
    } catch (err) {
res.status(500).json(err)
    }
})


module.exports = router;
