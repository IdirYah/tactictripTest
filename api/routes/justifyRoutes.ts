import {justifyController} from "../controllers/justifyController"
import {authMiddleware} from "../middleware/authMiddleware"
import {Router} from "express"

const router = Router()

router.post("/api/justify",authMiddleware,justifyController)

export default router