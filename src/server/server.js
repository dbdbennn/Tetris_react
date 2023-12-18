const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const app = express();
const PORT = 3001;

// MySQL 연결
const db = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "tetris", // 사용할 데이터베이스
});

app.use(
  cors({
    origin: "*",
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

// post 요청 시 값을 객체로 바꿔줌
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 서버 연결 시 발생
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});

app.get("/api/get_score", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");

  const sqlQuery = "SELECT * FROM player_score ORDER BY player_score DESC";

  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});

app.post("/api/save_score", (req, res) => {
  console.log(req.body);
  const { name, score } = req.body;

  const sqlQuery =
    "INSERT INTO player_score (player_name, player_score) VALUES (?, ?)";
  db.query(sqlQuery, [name, score], (err, result) => {
    if (err) {
      res.status(500).send("Error saving score to the database");
    } else {
      res.status(200).send("Score saved successfully");
    }
  });
});
