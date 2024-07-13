import express from "express";
import { createJob } from "../controllers/Job.controller.js";

const router = express.Router();

router.post("/newJob", createJob);

export default router;
