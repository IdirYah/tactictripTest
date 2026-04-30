import {StatusCodes} from "http-status-codes"
import {Request,Response} from "express"
import jwt from "jsonwebtoken"
import {emailValidation} from "../utils/emailValidation"

export const authController = (req:Request<{},{},{email:string}>,res:Response)=>{
    const {email} = req.body
    try{
        if(!email){
            return res.status(StatusCodes.BAD_REQUEST).json({error:"Email is required."})
        }
        if(!emailValidation(email)){
            return res.status(StatusCodes.BAD_REQUEST).json({error:"Invalid email format."})
        }
        const token = jwt.sign({email},process.env.JWT_SECRET_KEY as string,{expiresIn:"1h"})
        res.status(StatusCodes.OK).json({token})
    }catch(error){
        console.log(error)
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error:"Internal server error."})
    }
}