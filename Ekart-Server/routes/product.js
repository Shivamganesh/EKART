import express from "express";
import { geProductsByCategoryId } from "../controllers/product.js"




const router = express.Router();

router.get('/:categoryId', geProductsByCategoryId)

export default router