import Items from "./Items";

function FoodItems({items}){
return<>
        <ul className=" w-1/4 list-decimal p-0 ">
  {items.map(item=><Items key={item} foodItems={item}></Items>)}
</ul>
</>
}
export default FoodItems;