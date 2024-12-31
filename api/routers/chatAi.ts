import { Router } from "express";
import chatAiResponse from "../controllers/chatAi/ChatAiResponse";

const router = Router();

router.get("/chatGetResponse", chatAiResponse);

export default router;
