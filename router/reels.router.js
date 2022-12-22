import Express from "express";
import { UploadReel } from "../controller/reels.constrollers.js";
import { auth } from "../midelvear/authentication.js";
import { reelServish } from "../servish/image.servish.js";
const ReelsRouter = Express.Router()
ReelsRouter.route("/user/upload/reels").post(reelServish.array('reels',1),UploadReel)
export default ReelsRouter