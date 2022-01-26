import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import { msg, getMsgs} from "./msg.js";

// get express ready to run
const app = express();
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(express.static("frontend"));

app.get("/poll", function (req, res) {
  res.status(Math.random() > .3 ? 200 : 500).json({
    msg: getMsgs(),
  });
});

app.post("/poll", function (req, res) {
  const { user, text } = req.body;

  msg.push({
    user: user,
    text: text,
    time: Date.now(),
  });

  res.status(201).json({
    status: "ok",
  });
});

// start the server
const port = process.env.PORT || 3000;
app.listen(port);
console.log(`listening on http://localhost:${port}`);
