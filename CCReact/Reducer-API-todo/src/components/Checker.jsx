import { TodoItemsContext } from "../store/TodoItemsContext"
import { useContext } from "react";

const Checker=()=>{
  const {items}=useContext(TodoItemsContext);
  return<>
{items.length===0 && <h1 className="text-2xl">Enjoy your Day!!</h1>}
  </>
}
export default Checker