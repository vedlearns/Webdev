import { useState,useEffect } from "react";
import Items from "./Items";

function FoodItems({items}){
let [boughtItems,setBoughtItems]=useState([])
let [boughtValue,setBoughtValue]=useState()
const onBuyButton=(item)=>{
  if(boughtItems.includes(item)){
    console.log(`${item} removed`)
    setBoughtItems((prevItem)=>prevItem.filter(i=>i!==item));setBoughtValue=false
  console.log(boughtValue);
  }else{
  console.log(`${item} bought`)
  setBoughtItems([...boughtItems,item])
    setBoughtValue=true;
  console.log(boughtValue);
  }
}
return<>
        <ul >
  {items.map(item=><Items  key={item}
  bought={boughtValue}
  foodItems={item} handleBuyButton={()=>{onBuyButton(item)}} 
  ></Items>)}
</ul>
</>
}
export default FoodItems;