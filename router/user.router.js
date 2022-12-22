import Express from "express";
import { auth } from "../midelvear/authentication.js";
import { follower, login, sing} from "../controller/user.controller.js";
const router = Express.Router()
router.route("/user/sing").post(sing)
router.route("/user/login").post(login)
router.route("/user/followers").put(follower)
export default router