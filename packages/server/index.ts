import express from "express";
import type { Request, Response } from "express";

const app = express();

const port = process.env.PORT || 3000;


app.get("/", (req: Request, res: Response) => {
    res.send("hello!");
})
app.get("/api/hello", (req: Request, res: Response) => {
    res.json({"message": "hello from server app"});
})


app.listen(port, () => {
    console.log("server application started");
})



