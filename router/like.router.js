import Express from "express";
import { userLike } from "../controller/like.controller.js";
import { auth } from "../midelvear/authentication.js";
const likeUser = Express.Router()
likeUser.route("/user/like/post").post(userLike)
export default likeUser