import Express from "express";
import router from "./router/user.router.js";
import connectDB from "./config/mongo.js";
import { config } from "dotenv";
import imageRouter from "./router/image.router.js";
import ReelsRouter from "./router/reels.router.js";
import ReelShare from "./router/share.reel.router.js";
import likeUser from "./router/like.router.js";

const app = Express()
app.use(Express.json())
connectDB()
config()
app.use(router)
app.use(imageRouter)
app.use(ReelsRouter)
app.use(ReelShare)
app.use(likeUser)
app.listen(process.env.PORT||  3003, (req, res) => {
    console.log("server port:3003");
})