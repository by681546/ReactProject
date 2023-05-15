import React, { useEffect, useState } from "react";
import ProductList from "../product/productList";
import userSlice, { fetchUser } from "./userSlice";
import { useDispatch, useSelector } from "react-redux";
import './usercss.scss';
import { useNavigate } from "react-router-dom";
import OldUser from "./oldUser";
import Manager from "./manager";

const User = () => {
  let  users=[];
  
    let dispatch = useDispatch();
    useEffect(() => {
       dispatch(fetchUser())
    }, [])
    let userArr = useSelector(state => state.user.userArr);
    let [pass, setPass] = useState(0);
    let navigate=useNavigate();

    let curenUser = useSelector(state => state.user.curenUser);
    function userEnter  ()  {
        let find = userArr.find((item) => { return item.tz === pass });
        localStorage.setItem('currentUser', JSON.stringify(find));
        if (pass === "1") 
            navigate("/manager");
     else if(find!=null){
      navigate("/oldUser")
    }
     else
     navigate("/addUser")
    };
   
    return (<><div className="all">
       {/* <a link href='./oldUser.js'>link</a> */}
       
<img src="5698-8278-ללין-(טיילת-רויאל-ביץ)-אילת-md.jpg" className="imageReka"/>

    <br/>
        <input type="text"className="inputId" placeholder="תעודת זהות" onChange={(e) => { setPass(e.target.value) }} /><br />
        <input type="button"className="btnEnter" value="כניסה" onClick={() => { userEnter() }} /></div></>);
        
        
}
export default User;