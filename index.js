import Express from "express";
import router from "./router/user.router.js";
import connectDB from "./congfi/mongo.js";
import { config } from "dotenv";
const app = Express()
app.use(Express.json())
connectDB()
config()
app.use(router)
app.listen(process.env.PORT ||  3003, (req, res) => {
    console.log("server port:3003");
})