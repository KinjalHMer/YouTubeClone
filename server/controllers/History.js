import history from "../models/History.js";

export const addToHistory=async(req,res)=>{
    const historyData=req.body;
    const addToHistory=new history(historyData)
    try {
        await addToHistory.save()
        res.status(200).json("added to history")
    } catch (error) {
        res.status(400).json(error.message)
        return
    }
}

export const getAllHistory=async(req,res)=>{
    try {
        const files=await history.find();
        res.status(200).send(files)
    } catch (error) {
        res.status(400).json(error.message)
        return
    }
}

export const deleteHistory =async(req,res)=>{
    const{userId:userId}=req.params;
    try {
        await history.deleteMany({
            viewer:userId
        })
        res.status(200).json({message:"removed from history"})
    } catch (error) {
        res.status(400).json(error.message)
        return
    }
}