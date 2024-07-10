import mongoose from "mongoose";
import videoFile from "../models/videoFiles.js";

export const likeVideo=async(req,res)=>{

    const {id:_id}=req.params;
    const {Like}=req.body;
    // console.log(Like,_id)
    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send("video unavailable..")
    }
    try {
        const updateLike=await videoFile.findByIdAndUpdate(
            _id,{
                $set:{"Like":Like}
            }
        )
        res.status(200).json(updateLike)
    } catch (error) {
        res.status(400).json("error",error)
    }

}