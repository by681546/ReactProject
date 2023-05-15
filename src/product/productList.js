import { createRef, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduc, fetchAllProduct } from "./productSlice";
import{addProducToSal,deleteProducFromSal}from "./productSlice";
import './productcss.scss';



let num=0;



//let arr=[{"name":"htt","id":99,"price":56,"image":"thtryy"}]
const ProductList = () => {
    let arr = useSelector(state => state.product.productArr);
    let sal = useSelector(state => state.product.salKniyot);
let sum=useSelector(state => state.product.sum);
    let status = useSelector(state => state.product.status);
    let dispatch = useDispatch();
   
     useEffect(() => {
        // if (status === "idle")
        dispatch(fetchAllProduct())
    }, [])
    // let osefLasal=(item)=>{
       
    //    addProducToSal(sal,item);
    //    <ul>{sal.map(item => <li key={item.id}className="item"> {item.name}    {item.price}{item.image}</li>)}</ul> 
    // }
    const osefLasal=(item,qty)=>{
       
        dispatch(addProducToSal(item,qty));
       
       
    }
    const aserMeasal=(item)=>{
       
        dispatch(deleteProducFromSal(item));
       
    }
   

    return (<><h1><img src="5698-8278-ללין-(טיילת-רויאל-ביץ)-אילת-md.jpg"/></h1>
   
    
    

    <ul className="prodUl">
        {arr.map(item => <li key={item.id} className="prod"> 
        {item.name}    {item.price} ש"ח <img src={item.imgUrl}  className="images"/>
       <input type="button" className="btnAdd" onClick={()=>{osefLasal(item,num)}} value="הוסף לסל"/>
 </li>)}
    </ul>
    <h3>סל הקניות שלי</h3>
    
    <ul>
    {sal.map(item => <li key={item.id}> 
    <input type="button" onClick={()=>{aserMeasal(item)}} value="מחק מהסל"/>
    <input type="number" placeholder="כמות" onChange={(e)=>{num=e.target.value}} />
           {item.name} {item.price} ש"ח </li>)}

    </ul>
    <div>סה"כ לתשלום:{sum}</div>
    </>);
}

export default ProductList;








