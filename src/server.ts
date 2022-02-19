import express from "express";
const app = express();
import {router} from "./routes";
app.use(express.json());
app.use(router);
app.listen(3000, ()=>{console.log("server is running")});