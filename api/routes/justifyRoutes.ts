import {justifyController} from "../controllers/justifyController"
import {Router} from "express"

const router = Router()

router.post("/api/justify",justifyController)

export default router