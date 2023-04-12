import React from "react";
import { useSelector, useDispatch } from "react-redux";


const Filter = () =>{
    const dispatch = useDispatch();
    const filter = useSelector(state=>state.filter);
 
    return (
        
<input type="text" onClick={()=>dispatch(filter())} />

    )

}

export default Filter;