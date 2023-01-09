import Express from "express";
import { auth } from "../midelvear/authentication.js";
import { follower, login, sing, userInsert} from "../controller/user.controller.js";
import { csvService } from "../servish/image.servish.js";
const router = Express.Router()
router.route("/user/sing").post(sing)
router.route("/user/login").post(login)
router.route("/user/followers").put(follower)
router.route("/user/inser/exell").post(csvService.single("csv"),userInsert)
export default router