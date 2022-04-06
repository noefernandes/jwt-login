const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    res.send("ola");
});

module.exports = router;