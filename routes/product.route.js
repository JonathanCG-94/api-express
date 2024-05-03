import express from "express";
import router from "./routes/product.route";
import { products } from "../controllers/product.controller.js";



// const router = express.Router();

// router.get("/", (req, res) => {
//     res.status(200).json({
//         succes: true,
//         data: [
//             {
//                 subjects: "Programacion",
//                 semestre: "7",
//                 hour: "20:00:pm",
//                 date: new Date().toDateString(),
//             }
//         ]
//     })
// })

router.get("/", products)
export default router;