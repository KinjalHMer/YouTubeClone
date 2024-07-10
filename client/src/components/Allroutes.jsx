import React from 'react';
import {
  Route,
  Routes
} from "react-router-dom";
import Channel from '../Pages/Channel/Channel';
import Home from '../Pages/Home/Home';
import Library from '../Pages/Library/Library';
import LikedVideo from '../Pages/LikedVideo/LikedVideo';
import Search from '../Pages/Search/Search';
import VideoPage from '../Pages/VideoPage/VideoPage';
import WatchHistory from '../Pages/WatchHistory/WatchHistory';
import WatchLater from '../Pages/WatchLater/WatchLater';
import YourVideo from '../Pages/YourVideo/YourVideo';
function AllRoutes({setEditCreateChannelBtn, setVidUploadPage}) {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/library' element={<Library/>}/>
        <Route path='/history' element={<WatchHistory/>}/>
        <Route path='/watchlater' element={<WatchLater/>}/>
        <Route path='/likedvideo' element={<LikedVideo/>}/>
        <Route path='/yourvideos' element={<YourVideo/>}/>
        <Route path='/videopage/:vid' element={<VideoPage/>}/>
        <Route path='/search/:searchQuery' element={<Search/>}/>
        
        <Route
        path='/channel/:Cid'
        element={<Channel
        setVidUploadPage={setVidUploadPage}
        setEditCreateChannelBtn={setEditCreateChannelBtn} />}/>
    </Routes>
  )
}

export default AllRoutes