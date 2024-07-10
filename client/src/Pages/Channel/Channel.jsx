import React from 'react';
import { useParams } from 'react-router-dom';
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
import ShowVideoGrid from '../../components/ShowVideoGrid/ShowVideoGrid';
// import vid from '../../components/Video/vid.mp4';
import { useSelector } from 'react-redux';
import DescribeChannel from './DescribeChannel';

const Channel=({setEditCreateChannelBtn, setVidUploadPage})=> {
    const {Cid}=useParams();
    const vids=useSelector(state=>state.videoReducer)?.data?.filter(q=>q?.videoChannel === Cid).reverse();

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
        <div className='container_Pages_App'>
            <LeftSidebar/>
            <div className="container2_Pages_App">
                <DescribeChannel Cid={Cid}
                setVidUploadPage={setVidUploadPage}
                setEditCreateChannelBtn={setEditCreateChannelBtn} />
                <ShowVideoGrid vids={vids}/>
            </div>
        </div>
    );
}

export default Channel
