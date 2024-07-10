import React from 'react';
import { useSelector } from 'react-redux';
import ShowVideo from '../ShowVideo/ShowVideo';

function ShowVideoList({videoId}) {
    const vids=useSelector(s=>s.videoReducer)
    console.log(vids.data)
//     const vids = [
//         {
//         _id: 1,
//         video_src: vid,
//         channel: "62bafe6752cea35a6c30685",
//         title:"video 1",
//         Uploader:"abc",
//         description:"description of video 1"
//         },
//         {
//             _id: 2,
//             video_src: vid,
//             channel: "cdd",
//             title:"video 2",
//             Uploader:"abc",
//             description:"description of video 2"
//         },
//         {
//             _id: 3,
//             video_src: vid,
//             channel: "add",
//             title:"video 3",
//             Uploader:"abc",
//             description:"description of video 3"
//         },
//         {
//             _id: 4,
//             video_src: vid,
//             channel: "add",
//             title:"video 4",
//             Uploader:"abc",
//             description:"description of video 4"
//         }
// ];
return (
    <div className='Container_ShowVideoGrid'>
    {
        vids?.data?.filter(Q=>Q._id===videoId).map(vi=>
        {
            return(
            <div key={vi._id} className="video_box_app">
                <ShowVideo vid={vi} />
            </div>
            )
        })
    }
    </div>
)
}

export default ShowVideoList
