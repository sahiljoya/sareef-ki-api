import Express from "express";
import { auth } from "../midelvear/authentication.js";
import { uploadStory } from "../controller/story.constroller.js";
import { storyService } from "../servish/image.servish.js";
const storyRouter = Express.Router()
storyRouter.route("/user/story/upload").post(storyService.array('story',5),uploadStory)
export default storyRouter