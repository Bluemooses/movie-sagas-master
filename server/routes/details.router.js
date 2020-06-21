const express = require("express");
//to target database
const pool = require("../modules/pool");
const router = express.Router();
router.get(`/:id`, (req, res) => {
  console.log(req.params.id);
  let details = req.params.id;

  let queryText = `SELECT * FROM "movies" WHERE "id" = $1;`;
  pool
    .query(queryText, [details])
    .then((result) => {
      console.log(result);
      res.send(result.rows[0]);
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

module.exports = router;
