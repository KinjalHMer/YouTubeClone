import React from 'react';
import { AiOutlineLike } from 'react-icons/ai';
import { FaHistory } from 'react-icons/fa';
import { MdOutlineWatchLater } from 'react-icons/md';
import { useSelector } from 'react-redux';
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
import WHLVideoList from "../../components/WHL/WHLVideoList";
import './Library.css';

function Library() {
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
const CurrentUser=useSelector(state=>state?.CurrentUserReducer);

const watchLaterList=useSelector(state=>state.watchLaterReducer)
const likedVideoList=useSelector(state=>state.likedVideoReducer)
const historyList= useSelector(state=>state.HistoryReducer)
return (
    <div className='container_Pages_App'>
        <LeftSidebar/>
        <div className="container2_Pages_App">
            <div className="container_libraryPage">
                    <h1 className='title_container_libraryPage'>
                        <b>
                            <FaHistory/>
                        </b>
                        <b>
                            History
                        </b>
                    </h1>
                    <div className="container_videoList_LibraryPage">
                        <WHLVideoList
                        page={"History"}
                        CurrentUser={CurrentUser?.result._id}
                        videoList={historyList}
                        />
                    </div>
            </div>
            <div className="container_libraryPage">
                    <h1 className='title_container_libraryPage'>
                        <b>
                            <MdOutlineWatchLater/>
                        </b>
                        <b>Watch Later</b>
                    </h1>
                    <div className="container_videoList_LibraryPage">
                        <WHLVideoList
                        page={"Watch Later"}
                        CurrentUser={CurrentUser?.result._id}
                        videoList={watchLaterList}
                        />
                    </div>
            </div>
            <div className="container_libraryPage">
                    <h1 className='title_container_libraryPage'>
                        <b>
                            <AiOutlineLike/>
                        </b>
                        <b>Liked Videos</b>
                    </h1>
                    <div className="container_videoList_LibraryPage">
                        <WHLVideoList
                        page={"Liked Videos"}
                        CurrentUser={CurrentUser?.result._id}
                        videoList={likedVideoList}
                        />
                    </div>
            </div>
        </div>
    </div>
)
}

export default Library