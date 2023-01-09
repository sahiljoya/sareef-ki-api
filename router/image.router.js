import Express from "express";
import { UpdateProfie, uploadProfile } from "../controller/images.controllers.js";
import { auth } from "../midelvear/authentication.js";
import { imageUploaded } from "../servish/image.servish.js";
const imageRouter = Express.Router()
imageRouter.route("/user/profile").post(imageUploaded.single("image"),uploadProfile)
imageRouter.route("/user/update-profile").post(imageUploaded.array("image",1),UpdateProfie)
export default imageRouter
