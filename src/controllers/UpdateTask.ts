import { prismaClient } from "@database/prismaClient";
import { Request, Response } from "express";
class UpdateTask{
    async handle(request:Request,response:Response){
     const{id,title,check}=request.body;


    }
}
export{UpdateTask};