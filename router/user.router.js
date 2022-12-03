import Express from "express";
import { auth } from "../midelvear/authentication.js";
import { sing, login, alldata, update, deletedata, otpVarify, resendOtp } from "../contoller/user.controller.js";
const router = Express.Router()
router.route("/user/sing").post(sing)
router.route("/user/login").put(login)
router.route("/user/get").get(alldata)
router.route("/user/update").put(auth, update)
router.route("/user/delete").delete(auth, deletedata)
router.route("/user/otp-verify").post(otpVarify)
router.route("/user/otp-resend").get(resendOtp)
export default router