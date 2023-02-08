import { Router } from "express";
import {
  createPost,
  deletePost,
  getPosts,
} from "../controllers/posts.controllers.js";

const router = Router();

router.get("/posts", getPosts);

router.post("/posts", createPost);

router.delete("/posts/:id", deletePost);

export default router;
