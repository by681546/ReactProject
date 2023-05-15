import userSlice from "./userSlice"
import {  Link,Outlet } from 'react-router-dom';  

const OldUser=()=>{
    return(<>
    <h1>שלום {JSON.parse(localStorage.getItem('currentUser')).name} </h1>
    <nav><Link to="product">למוצרים</Link></nav>
    </>)
}
export default OldUser;