import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import './App.css';
import CreateEditChannel from "./Pages/Channel/CreateEditChannel";
import VideoUpload from "./Pages/VideoUpload/VideoUpload";
import { getAllHistory } from "./actions/History";
import { fetchAllChannel } from "./actions/channelUser";
import { getAllComment } from "./actions/comments";
import { getAlllikeVideo } from "./actions/likedVideo";
import { getAllVideos } from "./actions/video";
import { getAllwatchLater } from "./actions/watchLater";
import AllRoutes from './components/Allroutes';
import DrawerSidebar from "./components/LeftSidebar/DrawerSidebar";
import Navbar from './components/Navbar';

function App() {
const dispatch=useDispatch();

useEffect(()=>{
    dispatch(fetchAllChannel());
    dispatch(getAllVideos())
    dispatch(getAllComment());
    dispatch(getAlllikeVideo());
    dispatch(getAllwatchLater());
    dispatch(getAllHistory());

}, [dispatch]);

  const [toggleDrawerSidebar,setToggleDrawerSidebar] = useState({
    display:"none",
})
const toggleDrawer=()=>{
  if(toggleDrawerSidebar.display==="none"){
    setToggleDrawerSidebar({display:"flex"})
  }else{
    setToggleDrawerSidebar({display:"none"})
  }
};
const [vidUploadPage,setVidUploadPage] = useState(false)
const [EditCreateChannelBtn,setEditCreateChannelBtn] = useState(false)
  return (
    <Router>
      {vidUploadPage && <VideoUpload setVidUploadPage={setVidUploadPage} />}
      {
        EditCreateChannelBtn && <CreateEditChannel setEditCreateChannelBtn={setEditCreateChannelBtn} />
      }
      <Navbar
      setEditCreateChannelBtn={setEditCreateChannelBtn}
      toggleDrawer={toggleDrawer}
      />
      
        <DrawerSidebar
        toggleDrawer={toggleDrawer}
        toggleDrawerSidebar={toggleDrawerSidebar}
        />
      
      <AllRoutes setVidUploadPage={setVidUploadPage} setEditCreateChannelBtn={setEditCreateChannelBtn} />
    </Router>
  );
}

export default App;