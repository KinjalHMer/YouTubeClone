import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postComment } from '../../actions/comments';
import './Comments.css';
import DisplayComments from './DisplayComments';
function Comments({videoId}) {
    const [commentText, setCommentText] = useState("")
    const CurrentUser=useSelector(state=>state?.CurrentUserReducer);
    const commentsList= useSelector(s=>s.commentReducer)
    const dispatch=useDispatch();
    
    // const commentsList=[
    //     {
    //         _id:"1",
    //         commentBody:"Hello",
    //         userCommented:"abc"
    //     },
    //     {
    //         _id:"2",
    //         commentBody:"Hii",
    //         userCommented:"xyz"
    //     },
    // ];
    const handleOnSubmit=(e)=>{
        e.preventDefault();
    if(CurrentUser){
        if(!commentText){
            alert("Please type your comment!")
        }else{
            dispatch(postComment({
                videoId:videoId,
                userId: CurrentUser?.result._id,
                commentBody: commentText,
                userCommented: CurrentUser?.result.name,
            })
        );
        setCommentText("");
        }
    }else{
        alert("Please login to post your comment")
    }
    };
return (
    <>
    <form className='comments_sub_form_comments'
    onSubmit={handleOnSubmit}
    >
        <input type="text"
        onChange={(e)=>setCommentText(e.target.value)}
        placeholder='add comment...'
        value={commentText}
        className='Comment_ibox'
        />
        <input type="submit" value="add" className='comment_add_btn_comments' />
    </form>
    <div className="display_comment_container">
        {
            commentsList?.data?.filter((q)=>videoId === q?.videoId).reverse().map((m)=>{
                return(
                    <DisplayComments
                    cId={m._id}
                    userId={m.userId}
                    commentBody={m.commentBody}
                    commentOn={m.commentOn}
                    userCommented={m.userCommented}
                    />
                )
            })
        }
    </div>
    </>
)
}

export default Comments
