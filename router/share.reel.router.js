import Express from "express";
import { auth } from "../midelvear/authentication.js";
import { SHAREreels } from "../controller/share.reel.controllers.js";
const ReelShare = Express.Router()
ReelShare.route("/user/share/reel").post(SHAREreels)
export default ReelShare