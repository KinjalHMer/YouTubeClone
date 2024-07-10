import React, { useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { useDispatch, useSelector } from 'react-redux';
import { uploadVideo } from '../../actions/video';
import './VideoUpload.css';

function VideoUpload({setVidUploadPage}) {
    const CurrentUser=useSelector(state=>state.CurrentUserReducer)
    const dispatch=useDispatch();
    const [title,setTitle] = useState("")
    const [videoFile,setVideoFile] = useState("")

const handleSetVideoFile=(e)=>{
    setVideoFile(e.target.files[0]);
}

const [progress,setProgress] = useState(0)

const fileOptions={
onUploadProgress:(progressEvent)=>{
    const {loaded, total}=progressEvent;
    const percentage=Math.floor(((loaded/1000)*100)/(total/1000));
    setProgress(percentage)
    if(percentage===100){
        setTimeout(function(){},3000);
        setVidUploadPage(false);
    }
}
}
const uploadVideoFile=()=>{
if(!title){
    alert("Please enter the title of the video")
}else if(!videoFile){
    alert("Please attach a video file")
}else if(videoFile.size > 1000000){
    alert("Please attach video file less than 1KB")
}else{
    const fileData=new FormData();
    fileData.append("file",videoFile);
    fileData.append("title",title);
    fileData.append("channel",CurrentUser?.result._id);
    fileData.append("Uploader",CurrentUser?.result.name);
    // console.log(videoFile)
    dispatch(uploadVideo({
        fileData:fileData,
        fileOptions:fileOptions
    })
);
}
};

return (
    <div className='container_VidUpload'>
        <input
        type="submit"
        name="text"
        value={"x"}
        onClick={()=>setVidUploadPage(false)}
        className='ibtn_x'
        />
        <div className="container2_VidUpload">
            <div className="ibox_div_vidUpload">
                <input
                onChange={(e)=>{setTitle(e.target.value)}}
                type="text"
                className='ibox_vidUpload'
                maxLength={30}
                placeholder='Enter Title of your video'
                />
                <label htmlFor="file" className='ibox_vidUpload btn_vidUpload'>
                <input
                onChange={e=>{handleSetVideoFile(e)}}
                type="file"
                name="file"
                className='ibox_vidUpload'
                style={{fontSize:"1rem"}}
                />
                </label>
            </div>
            <div className="ibox_div_vidUpload">
                <input
                onClick={()=>uploadVideoFile()}
                type="submit"
                value="Upload"
                className='ibox_vidUpload btn_vidUpload'
                />
            </div>
            <div className="loader ibox_div_vidUpload">
                <CircularProgressbar
                value={progress}
                text={`${progress}`}
                style={
                    buildStyles({
                        rotation:0.25,
                        strokeLinecap:'butt',
                        textSize:"20px",
                        pathTransitionDuration:0.5,
                        pathColor:`rgba(255,255,255,${progress/100})`,
                        textColor:"#f88",
                        trailColor:"#adff2f",
                        backgroundColor:"#3e98c7"
                    })}
                />
            </div>
        </div>
    </div>
)
}

export default VideoUpload
