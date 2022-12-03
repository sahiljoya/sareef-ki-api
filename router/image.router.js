import Express from "express";
import { uploadProfile } from "../contoller/images.controllers.js";
import { auth } from "../midelvear/authentication.js";
import { imageUploaded } from "../servish/image.servish.js";
const imageRouter = Express.Router()
imageRouter.route("/user/profile").post(imageUploaded.array("image",1),auth,uploadProfile)
export default imageRouter
