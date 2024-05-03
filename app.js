import express from "express";
import cors from "cors";
import productRouter from "./routes/product.route.js";

//const express = require('express')
//const app = express()
//const port = 3000

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(express.static("public"));

// app.get("/products", (req, res) => {
//     res.status(200).json({
//         succes: true,
//         data: [
//             {
//                 subjects: "Programacion",
//                 semestre: "7",
//                 hour:"20:00:pm",
//                 date: new Date().toDateString(),
//             }
//         ]
//     })
// })
app.use("/products", productRouter);

app.listen(port, () => {
    console.log(`example app listening on port ${port}`);
})

