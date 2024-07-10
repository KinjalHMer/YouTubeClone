import React from 'react';
import { useSelector } from 'react-redux';
import WHL from '../../components/WHL/WHL';

function WatchLater() {

    const watchLaterList=useSelector(state=>state.watchLaterReducer)
    console.log(watchLaterList);
    // const watchLater = [
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
    <WHL page={"Watch Later"} videoList={watchLaterList} />
    </div>
)
}

export default WatchLater