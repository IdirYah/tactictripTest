import express from "express"
import env from "dotenv"

import router from "./routes/Router"

env.config()
const app = express()
const port = process.env.PORT || 8080

app.use(express.text())
app.use(express.json())
app.use(router)

app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`)
})