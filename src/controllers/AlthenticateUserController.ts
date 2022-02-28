import { Request, Response } from "express";
import { prismaClient } from "@database/prismaClient";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
class AlthenticateUserController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body;
    const user = await prismaClient.user.findFirst({ where: { email: email } });
    if (!user) {
      throw new Error("E-mail && password Incorrect");
    }
  
    const passwordMath = await compare(password, user.password);

    if (!passwordMath) {
      throw new Error("E-mail && password Incorrect");
    }

    const Token = sign(
      {
        email: user.email,
        name: user.name,
      },
      "FlashPoint",
      {
        subject: user.id,
        expiresIn: "7d",
      }
    );
    console.log(Token);
    return response.json(Token);
  }
}
export { AlthenticateUserController };
