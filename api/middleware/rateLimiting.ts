import {Response,NextFunction} from "express"
import {StatusCodes} from "http-status-codes"
import {pool} from "../config/db"

const max = parseInt(process.env.RATE_LIMIT_MAX_REQUESTS as string)

export const rateLimiting = async(req:any,res:Response,next:NextFunction)=>{
    try {
        const email = req.user?.email
        if(!email){
            return res.status(StatusCodes.UNAUTHORIZED).json({error:"Unauthorized : Email required"})
        }
        const text = req.body
        const words = text ? text.trim().split(/\s+/).length : 0
        const today = new Date().toISOString().split("T")[0]
        const [rows]: any = await pool.query("SELECT * FROM rateLimit WHERE email = ? AND jour = ?",[email,today])
        const currentCount = rows.length>0 ? Number(rows[0].nbTokens) : 0
        if(currentCount+words>max){
            return res.status(StatusCodes.PAYMENT_REQUIRED).json({error:"You should pay."})
        }
        if(rows.length>0){
            await pool.query("UPDATE rateLimit SET nbTokens = nbTokens + ? WHERE email = ? AND jour = ?",[words,email,today])
        }else{
            await pool.query("INSERT INTO rateLimit (email, jour, nbTokens) VALUES (?,?,?)",[email,today,words])
        }   
        next()
    }catch(error){
        console.log(error)
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error:"Internal server error."})
    }
}