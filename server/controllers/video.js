import videofile from "../models/videoFiles.js";
export const uploadVideo=async(req,res)=>{
    if(req.file=== undefined){
        res.status(404).json({message:"plz upload a mp4 video file only"})
    }else{
        try {
            const file=new videofile({
                videotitle:req.body.title,
                filename:req.file.originalname,
                filepath:req.file.path,
                filetype:req.file.mimetype,
                filesize:req.file.size,
                videochanel:req.body.chanel,
                uploader:req.body.uploader,
            })
            // console.log(file)
            await file.save()
            res.status(200).send("File uploaded successfully")
        } catch (error) {
            res.status(404).json(error.message)
            return
        }
    }
}

export const getAllVideos=async(req,res)=>{
    try {
        const files=await videofile.find();
        res.status(200).send(files)
    } catch (error) {
        res.status(404).json(error.message)
            return
    }
}