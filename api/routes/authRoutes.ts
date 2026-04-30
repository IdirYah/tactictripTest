import {authController} from "../controllers/authController"
import {Router} from "express"

const router = Router()

router.post("/api/token",authController)

export default router