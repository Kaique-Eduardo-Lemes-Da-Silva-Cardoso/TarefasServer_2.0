import { prismaClient } from "@database/prismaClient";
import { hash } from "bcryptjs";
import { Request, Response } from "express";
class CreateUserController{
    async handle(request: Request, response: Response) {
        const{name,password,admin,email}=request.body;
        if (!name) {
            throw new Error("name incorrect");
          }
        if (!email) {
            throw new Error("Email incorrect");
          }
        if (admin === null) {
            throw new Error("admin is empity");
          }
      
          console.log("Password", password);
      
          if (!password) {
            throw new Error("Password is empity");
          }
         const passwordHash = await hash(password,8);

        const user = prismaClient.user.create({
            data:{name:name,password:passwordHash,admin:admin,email:email,}
        });
        return response.json(user);

    }
}
export{CreateUserController};