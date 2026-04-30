import {justifyText} from "../utils/justifyFunction"
import {Request,Response} from "express"
import {StatusCodes} from "http-status-codes"

export const justifyController = (req:Request<{},{},string>,res:Response)=>{
    const text:string = req.body
    try{
        if(!text||text.trim()===""){
            return res.status(StatusCodes.BAD_REQUEST).json({error:"Text is required."})
        }
        const justifiedText = justifyText(text,80)
        res.status(StatusCodes.OK).json({justifiedText})
    }catch(error){
        console.log(error)
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error:"Internal server error."})
    }
}