import { useState, useContext } from "react";
import styles from "./AddTodo.module.css"
import TodoItem from "./TodoItem";
import { TodoItemsContext } from "../store/TodoItemsContext";

function AddTodo(){

const {items,addNewItem,deleteItem}=useContext(TodoItemsContext);

const [todoName,setToDoName]=useState("");
const [dueDate,setDueDate]=useState("");
const taskHandler=(e)=>{
  setToDoName(e.target.value)
}
const dateHandler=(e)=>{
  setDueDate(e.target.value)
}
const handleAddClick=()=>{
  addNewItem(todoName,dueDate);
  setDueDate("");
  setToDoName("");
}
return <>
<div className="add-container ">
  <input onChange={taskHandler} value={todoName} className={`${styles[`addTodo`]}`}  type="text" placeholder="Enter Task Here" />
  <input onChange={dateHandler} value={dueDate} className={`${styles[`addTodo`]} ${styles.date}`} type="date" />
  <button onClick={handleAddClick} className={styles.button } >Add</button>
</div>
{items.map(item=><TodoItem key={item.task} todoTask={item.task} todoDate={item.deadline} handleDeleteClick={()=>{deleteItem(item)}} />)}
</>
}
export default AddTodo;