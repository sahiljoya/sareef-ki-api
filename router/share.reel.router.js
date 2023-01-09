import Express from "express";
import { auth } from "../midelvear/authentication.js";
import {  getDataGEt, getShareReel, SHAREreels } from "../controller/share.reel.controllers.js";
const ReelShare = Express.Router()
ReelShare.route("/user/share/reel").post(SHAREreels)
ReelShare.route("/user/share/get/lookup").get(getShareReel)
ReelShare.route("/user/get/share/reel").get(getDataGEt)
export default ReelShare