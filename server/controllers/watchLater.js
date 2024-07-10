
import watchlater from "../models/watchLater.js";

export const addTowatchLater = async (req, res) => {
    const watchlaterData = req.body;
    const addTowatchLater = new watchlater(watchlaterData)
    try {
        await addTowatchLater.save()
        res.status(200).json("added to watchlater")
    } catch (error) {
        res.status(400).json(error.message)
        return
    }
}
export const getAllwatchLater = async (req, res) => {
    try {
        const files = await watchlater.find()
        res.status(200).send(files)
    } catch (error) {
        res.status(400).json(error.message)
        return
    }
}
export const deleteWatchLater = async (req, res) => {
    const { videoid: videoid, viewer: viewer } = req.params
    try {
        await watchlater.findOneAndDelete({
            videoid:videoid,viewer:viewer,
        })
        res.status(200).json({message:"removed from watch later"})
    } catch (error) {
        res.status(400).json(error.message)
        return
    }

}
