const express = require("express");
//to target database
const pool = require("../modules/pool");
const router = express.Router();

router.get("/:id", (req, res) => {
  const queryText = `SELECT * FROM movies
    WHERE "id" = $1`;
  pool
    .query(queryText, [req.params.id])
    .then((results) => {
      res.send(results.rows[0]);
      console.log(results.rows[0]);
    })
    .catch((error) => {
      console.log("error in server side GET", error);
      res.sendStatus(500);
    });
});

module.exports = router;
