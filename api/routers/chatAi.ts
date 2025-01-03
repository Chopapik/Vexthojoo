import { Router } from "express";
import chatAiResponse from "../controllers/chatAi/chatAiResponse";

const router = Router();

router.get("/chatGetResponse", chatAiResponse);

export default router;
