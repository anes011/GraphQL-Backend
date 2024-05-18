const express = require('express');
const router = express.Router();

router.get('/test', (req, res) => {
    res.json({
        Hello: 'You made it to Apollo / Express!'
    });
});

router.post('/testPost', async (req, res) => {
    try {
        const { name } = req.body;

        res.json({
            msg: `Hello ${name}, your post request is successfull!`
        });
    } catch (err) {
        res.json({
            Error: err.message
        })
    }
});

module.exports = router;