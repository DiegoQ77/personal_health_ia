import express from "express";

import alimentationRouter from "./routes/alimentations";

const app = express();
const port = 3939;

app.use(express.json()); //midleware que transforma la req.body a un json

app.get("/ping", (_req, res) => {
  console.log("someone pinged here!!");
  res.send("pong");
});

app.use("/api/alimentation", alimentationRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port} 123`);
});
