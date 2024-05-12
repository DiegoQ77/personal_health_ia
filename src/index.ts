import express from "express";
// Using ES6 imports
// import mongoose from "mongoose";

// import Product from "./models/product.model";

import alimentationRouter from "./routes/alimentations";
import productRouter from "./routes/products";

const app = express();
const port = 3939;

app.use(express.json()); //midleware que transforma la req.body a un json

app.get("/ping", (_req, res) => {
  console.log("someone pinged here!!");
  res.send("pong");
});

app.use("/api/alimentation", alimentationRouter);

app.use("/api/products", productRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port} 123`);
});

// app.post("/api/products", async (req, res) => {
//   try {
//     const product = await Product.create(req.body);
//     res.status(200).json(product);
//     // console.log(req.body);
//     // res.send(req.body);
//   } catch (error) {
//     console.log(error);
//     //res.status(500).json({ message: error.message });
//   }
// });

// const uri =
//   "mongodb+srv://admin:yl1ZcEWnZZujVwwH@persoanlhealthdb.yuevlnx.mongodb.net/Node-API?retryWrites=true&w=majority&appName=PersoanlHealthDB";

// mongoose
//   .connect(uri)
//   .then(() => console.log("Connected!"))
//   .catch(() => {
//     console.log("Connection failed");
//   });
