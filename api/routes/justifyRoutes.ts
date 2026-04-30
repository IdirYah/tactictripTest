import {justifyController} from "../controllers/justifyController"
import {authMiddleware} from "../middleware/authMiddleware"
import {rateLimiting} from "../middleware/rateLimiting"
import {Router} from "express"

const router = Router()

router.post("/api/justify",authMiddleware,rateLimiting,justifyController)

export default router