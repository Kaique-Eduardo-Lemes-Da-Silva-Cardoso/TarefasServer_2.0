
import express,{Request,Response,NextFunction} from "express";
const app = express();
import "express-async-errors";
import {router} from "./routes";
// import cors from "cors";
// app.use(cors())

app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
        if (err instanceof Error) {
            console.log(`ERRO: ${err.message}`)
          return response.status(400).json({
            error: err.message,
          });
        }
    
        return response.status(500).json({
          status: "error",
          message: "Internal Server Error",
        });
      }
);
app.use(express.json());
app.use(router);

app.listen(3000, ()=>{console.log("server is running")});