import moment from 'moment';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteComment, editComment } from '../../actions/comments';
import './Comments.css';

function DisplayComments({cId,commentBody,userId,commentOn,userCommented}) {
    const [Edit, setEdit] = useState(false)
    const [cmtBdy, setCmtBdy] = useState("");
    const [cmtId, setcmtId] = useState("");
    const CurrentUser=useSelector(state=>state?.CurrentUserReducer);

    const handleEdit=(ctId,ctBdy)=>{
        setEdit(true);
        setcmtId(ctId)
        setCmtBdy(ctBdy);
    }
    const dispatch=useDispatch();

    const handleOnSubmit=(e)=>{
        e.preventDefault();
        if(!cmtBdy){
            alert("Type your comments")
        }else{
            dispatch(editComment({
                id:cmtId,
                commentBody:cmtBdy
            }))
            setCmtBdy("")
        }
        setEdit(false);
    }
    const handleDel =(id)=>{
        dispatch(deleteComment(id))
    }
return (
    <>
    {
        Edit ? (<>
        <form className='comments_sub_form_comments'
        onSubmit={handleOnSubmit}
    >
        <input type="text"
        onChange={(e)=>setCmtBdy(e.Target.value)}
        placeholder='Edit comment...'
        value={cmtBdy}
        className='Comment_ibox'
        />
        <input type="submit" value="Change" className='comment_add_btn_comments' />
    </form>
        </>):(
            <p className="comment_body">{commentBody}</p>
        )
    }
    <p className="usercommented"> - {userCommented} commented {moment(commentOn).fromNow()}</p>
    {
        CurrentUser?.result._id === userId &&(
            <p className="EditDel_DisplayComment">
                <i onClick={()=>handleEdit(cId,commentBody)}>Edit</i>
                <i onClick={()=>handleDel(cId)}>Delete</i>
            </p>
        )}
    </>
)
}

export default DisplayComments
