import React from 'react';
import { useSelector } from 'react-redux';
import WHL from '../../components/WHL/WHL';

function LikedVideo() {
    const likedVideoList=useSelector(state=>state.likedVideoReducer)
    // const likedVideo = [
    //     {
    //     _id: 1,
    //     video_src: vid,
    //     channel: "62bafe6752cea35a6c30685",
    //     title:"video 1",
    //     Uploader:"abc",
    //     description:"description of video 1"
    //     },
    //     {
    //         _id: 2,
    //         video_src: vid,
    //         channel: "cdd",
    //         title:"video 2",
    //         Uploader:"abc",
    //         description:"description of video 2"
    //     },
    //     {
    //         _id: 3,
    //         video_src: vid,
    //         channel: "add",
    //         title:"video 3",
    //         Uploader:"abc",
    //         description:"description of video 3"
    //     },
    //     {
    //         _id: 4,
    //         video_src: vid,
    //         channel: "add",
    //         title:"video 4",
    //         Uploader:"abc",
    //         description:"description of video 4"
    //     }
    // ];
return (
    <div>
    <WHL page={"Liked Video"} videoList={likedVideoList} />
    </div>
)
}

export default LikedVideo