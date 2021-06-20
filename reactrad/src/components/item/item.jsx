import React, { useState } from 'react';
import  '../item/item.css'
const Item=(item)=>{
    const [note,setNote]=useState();

    return(

    
    <div className={'todo-item'} >
                    
                    <ul className={"header-line item-line"}>
                        <li className={"item-name"}>{item?.name}Караук </li>
                        <li >{item.date}Караук</li>
                        <li>{item.category}Караук</li>
                        <li>{item.context}Караук</li>
                        <li>{item.planDate}Караук</li>
                    </ul>
                        
                        <ul className={"header-line-buttons"}>
                        <li><button className={"Delete-but"}> <img className={"Delete_button change-button"}  alt=""></img></button></li>
                        <li><button className={"Delete-but"}> <img className={"Delete_button"}  alt=""></img></button> </li>
                        <li><button className={"Delete-but"}> <img className={"Delete_button"}  alt=""></img></button></li>
                    </ul>
    
                
            </div>
   

    );

}
export default Item;