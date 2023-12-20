import { Router } from "express";
import { Create, Delete, Get, GetList, Update } from "../controllers/todo/todo";

const router = Router();

router.get("/", GetList);
router.post("/", Create);
router.get("/:id", Get);
router.delete("/:id", Delete);
router.put("/:id", Update);

export default router;
