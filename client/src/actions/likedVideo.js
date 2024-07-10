import * as api from '../api';

export const addToLikedVideo=(likedVideoData)=>async(dispatch)=>{
    try {
        const {data}= await api.addToLikedVideo(likedVideoData);
        dispatch({type:"POST_LIKEDVIDEO",data});
        dispatch(getAlllikeVideo())
    } catch (error) {
        console.log(error);
    }
}

export const getAlllikeVideo=()=> async (dispatch) =>{
    try {
        const {data}= await api.getAlllikeVideo();
    dispatch({type:"FETCH_ALL_LIKED_VIDEOS", payload:data})
    } catch (error) {
        console.log(error)
    }
}
export const deletelikedVideo=(likedVideoData)=> async(dispatch)=>{
    try {
        const {videoId,Viewer}=likedVideoData;
        await api.deletelikedVideo(videoId,Viewer);
        dispatch(getAlllikeVideo());
    } catch (error) {
        console.log(error);
    }
}
