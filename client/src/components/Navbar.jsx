import { gapi } from "gapi-script";
import React, { useEffect, useState } from 'react';
import { GoogleLogin } from "react-google-login";
import { BiUserCircle } from 'react-icons/bi';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { RiVideoAddLine } from 'react-icons/ri';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Auth from "../Pages/Auth/Auth";
import { login } from "../actions/auth";
import './Navbar.css';
import SearchBar from './SearchBar/SearchBar';
import logo from './logo.ico';

function Navbar({toggleDrawer, setEditCreateChannelBtn}) {

  const [AuthBtn, setAuthBtn]=useState(false)
  // const CurrentUser=null;
  // const CurrentUser = {
  //   result: {
  //     email: "xyz@gmail.com",
  //     joinedOn: "2222-07-15T09:57:23.489Z",
  //   },
  // };
  const CurrentUser=useSelector(state=>state.currentUserReducer)
  console.log(CurrentUser)
useEffect(()=>{
  function start() {
    gapi.client.init({
      clientId: "638216427448-va5ej1lbk9e7g1ndi5oin8rdrmsat7v6.apps.googleusercontent.com",
      scope: "email"
    })
  }
  gapi.load("client:auth2",start);
},[]);

const dispatch=useDispatch();

  const onSuccess=(response)=>{
const Email= response?.profileObj.email;
console.log(Email);
dispatch(login({email:Email}))
  };
const onFailure=(response)=>{
  console.log("Failed",response);
};
  return (
    <>
    <div className="Container_Navbar">
      <div className="Burger_Logo_Navbar">
        <div className="burger" onClick={()=>toggleDrawer()}>
          <p></p>
          <p></p>
          <p></p>
        </div>
        <Link to={'/'} className="logo_div_Navbar">
          <img src={logo} alt="" />
          <p className="logo_title_Navbar"> YouTube</p>
        </Link>
      </div>
      <SearchBar />
      <RiVideoAddLine size={22} className={"vid_bell_Navbar"} />
      <div className="apps_Box">
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>
      </div>
      <IoMdNotificationsOutline size={22} className="vid_bell_Navbar" />
      <div className="Auth_cont_Navbar">
        {
          CurrentUser ? (
          
          <>
          <div className="Channel_logo_App" onClick={()=>setAuthBtn(true)}>
            <p className="fstChar_logo_App">
              {
                CurrentUser?.result.name ?(
                <>
                {CurrentUser?.result.name.charAt(0).toUpperCase()}
                </>
                ):(<>
                {CurrentUser?.result.email.charAt(0).toUpperCase()}
                </>)
              }
            </p>
          </div>
          </>
        ) : (
          <>
            <GoogleLogin
            clientId={"638216427448-va5ej1lbk9e7g1ndi5oin8rdrmsat7v6.apps.googleusercontent.com"}
            onSuccess={onSuccess}
            onFailure={onFailure}
            render={(renderProps)=>(
              <p onClick={renderProps.onClick} className="Auth_Btn">
              <BiUserCircle size={22} />
              <b>Sign in</b>
              </p>
            )}
            />
          </>
        )}
      </div>
    </div>
    {
      AuthBtn &&
      <Auth
      setEditCreateChannelBtn={setEditCreateChannelBtn}
      setAuthBtn={setAuthBtn}
      User={CurrentUser}
      />
    }
    </>
  )
}

export default Navbar