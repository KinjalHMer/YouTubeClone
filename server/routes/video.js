
import express from "express";
import { addToHistory, deleteHistory, getAllHistory } from "../controllers/History.js";
import { likeVideo } from "../controllers/like.js";
import { deletelikedVideo, getAlllikeVideo, likedvideocontroller } from "../controllers/likeVideo.js";
import { getAllVideos, uploadVideo } from "../controllers/video.js";
import { viewVideo } from "../controllers/views.js";
import { addTowatchLater, deleteWatchLater, getAllwatchLater } from "../controllers/watchLater.js";
import upload from "../Helpers/fileHelpers.js";
import auth from "../middleware/auth.js";
const routes=express.Router();

routes.post("/uploadvideo",auth,upload.single("file"),uploadVideo)

routes.get("/getvideos",getAllVideos)
routes.patch('/like/:id',auth,likeVideo)
routes.patch('/view/:id',viewVideo)

routes.post('/history',auth,addToHistory)
routes.get('/getallhistory',getAllHistory)
routes.delete('/deletehistory/:userid',auth,deleteHistory)

routes.post('/watchlater',auth,addTowatchLater)
routes.get('/getallwatchlater',getAllwatchLater)
routes.delete('/deletewatchlater/:videoid/:viewer',auth,deleteWatchLater)

routes.post('/likevideo',auth,likedvideocontroller)
routes.get('/getalllikevide',getAlllikeVideo)
routes.delete('/deletelikevideo/:videoid/:viewer',auth,deletelikedVideo)

export default routes
