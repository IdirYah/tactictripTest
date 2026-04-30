import express from "express"
import env from "dotenv"

env.config()
const app = express()
const port = process.env.PORT || 8080

app.use(express.json())
app.get("/",(req,res)=>{
    res.send("Hello World")
})

app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`)
})