const express = require("express");
//to target database
const pool = require("../modules/pool");
const router = express.Router();

//GET MOVIES FROM DB
router.get("/", (req, res) => {
  const queryText = `SELECT * FROM "movies" ORDER BY "title" ASC;`;

  pool
    .query(queryText)
    .then((result) => {
      console.log(result.rows);
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("DB GET ERR", err);
      res.sendStatus(408);
    });
});

router.get("/:id", (req, res) => {
    console.log(req.params.id);
  const queryText = `SELECT * FROM "movies" WHERE "id" = $1`;
  pool
    .query(queryText, [req.params.id])
    .then((results) => {
        res.send(results.rows);
      console.log(results.rows);
    })
    .catch((error) => {
      console.log("error in server side GET", error);
      res.sendStatus(500);
    });
});

module.exports = router;
