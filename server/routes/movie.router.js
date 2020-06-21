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

router.get(`/genres/:id`, (req, res) => {
  let genres = req.params.id;
  let queryText = `SELECT "genres".name
FROM "genres"
  JOIN "genres_movies" ON
"genres".id = "genres_movies".genres_id
WHERE "genres_movies".movies_id = $1;`;
  pool
    .query(queryText, [genres])
    .then((result) => {
      console.log(result);
      res.send(result.rows);
    })
    .catch((error) => {
      res.sendStatus(500);
      console.log(error);
    });
});

module.exports = router;
