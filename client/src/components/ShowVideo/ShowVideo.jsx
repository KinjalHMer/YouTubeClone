import moment from 'moment'
import React from 'react'
import { Link } from 'react-router-dom'
import './ShowVideo.css'
function ShowVideo({vid}) {
    console.log(vid)
return (
    <>
    <Link to={`/videopage/${vid?._id}`}>
        <video
        src={`http://localhost:5500/${vid?.filePath}`}
            className='video_ShowVideo'
        ></video>
    </Link>
    <div className="video_description">
        <div className="Channel_logo_App">
            <div className="fstChar_logo_App">
                <>{vid?.Uploader?.charAt(0).toUpperCase()}</>
            </div>
        </div>
        <div className="video_details">
            <p className='title_vid_ShowVideo'>{vid?.videoTitle}</p>
            <pre className="vid_views_UploadTime">{vid?.Uploader}</pre>
            <pre className="vid_views_UploadTime">
                {vid?.Views} views <div className="dot"></div> {moment(vid?.createdAt).fromNow()}
            </pre>
        </div>
    </div>
    </>
)
}

export default ShowVideo
