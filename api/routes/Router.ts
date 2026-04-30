import justifyRoutes from "./justifyRoutes"
import authRoutes from "./authRoutes"
import {Router} from "express"

const router = Router()

router.use(justifyRoutes)
router.use(authRoutes)

export default router