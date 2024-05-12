import express from "express";

const router = express.Router();

router.get("/", (_req, res) => {
  res.send({ data: "dummy" });
});

router.post("/", (_req, res) => {
  res.send({ data: "dummy" });
});

export default router;
