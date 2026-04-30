import jwt from 'jsonwebtoken'
import {Request,Response,NextFunction} from 'express'
import {StatusCodes} from 'http-status-codes'
import {AuthRequest} from '../types/AuthRequestType'

export const authMiddleware = (req:AuthRequest,res:Response,next:NextFunction) => {
    const authHeader = req.headers.authorization
    if(!authHeader || !authHeader.startsWith('Bearer ')){
        return res.status(StatusCodes.UNAUTHORIZED).json({error:'Unauthorized'})
    }
    const token = authHeader.split(' ')[1] as string
    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET_KEY as string) as unknown as {email: string}
        req.user = {email:decoded.email}
        next()
    }catch(error){
        console.log(error)
        return res.status(StatusCodes.UNAUTHORIZED).json({error:'Unauthorized'})
    }
}