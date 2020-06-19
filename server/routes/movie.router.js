const express = require('express');
//to target database
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req,res) => {
    const queryText = `SELECT * FROM "movies" ORDER BY ASC;`;

    pool.query(queryText)
        .then((result) => {
            console.log(result.rows);
            res.send(result.rows);
        })
        .catch((err) => {
            console.log('DB GET ERR', err);
            res.sendStatus(408);
        })
})

module.exports = router;