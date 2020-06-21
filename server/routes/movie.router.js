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

router.put("/edit/:id", (req, res) => {
  console.log(req.body);
  let queryText = `UPDATE "movies" SET "title" = $2, "description" = $3 WHERE "id" = $1;`;
  pool
    .query(queryText, [req.params.id, req.body.title, req.body.description])
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log("error in server side PUT", error);
      res.sendStatus(500);
    });
});

module.exports = router;
