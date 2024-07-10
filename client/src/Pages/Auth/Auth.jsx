import React from 'react'
import { GoogleLogout } from 'react-google-login'
import { BiLogOut } from 'react-icons/bi'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { setCurrentUser } from '../../actions/currentUser'
import './Auth.css'

function Auth({User, setAuthBtn, setEditCreateChannelBtn}) {
    const dispatch=useDispatch();
    const onLogoutSuccess=()=>{
        dispatch(setCurrentUser(null));
        alert("Logged Out Successfully");
    }
return (
    <div className='Auth_container' onClick={()=>setAuthBtn(false)}>
        <div className='Auth_container2'>
            <p className="User_Details">
                <div className="Channel_logo_App">
                    <p className="fstChar_logo_App">
                        {User?.result.name ?(
                            <>{ User?.result.name.charAt(0).toUpperCase()}</>
                            ):(
                            <>{ User?.result.email.charAt(0).toUpperCase()}</>
                        )}
                    </p>
                </div>
                <div className="email_Auth">{User?.result.email}</div>
            </p>
            <div className="btns_Auth">
                {
                    User?.result.name ?<>
                    {
                        <Link to={`/channel/${User?.result._id}`} className='btn_Auth' onClick={()=>setEditCreateChannelBtn(true)}>
                            Your Channel
                        </Link>
                    }
                    {/* <input type="submit"
                className='btn_Auth'
                value="Your Channel"
                onClick={()=>setEditCreateChannelBtn(true)}
                /> */}

                    </>:<>
                    <input type="submit"
                className='btn_Auth'
                value="Create Your Channel"
                onClick={()=>setEditCreateChannelBtn(true)}
                />
                    </>
                }
            <div>
                <GoogleLogout
                clientId={"638216427448-va5ej1lbk9e7g1ndi5oin8rdrmsat7v6.apps.googleusercontent.com"}
                onLogoutSuccess={onLogoutSuccess}
                render={(renderProps)=>(
                <div onClick={renderProps.onClick} className='btn_Auth'>
                    <BiLogOut/>
                    Log Out
                </div>
                )}
                />
            </div>
            </div>
        </div>
    </div>
)
}

export default Auth