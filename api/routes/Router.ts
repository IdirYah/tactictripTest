import justifyRoutes from "./justifyRoutes"
import {Router} from "express"

const router = Router()

router.use(justifyRoutes)

export default router