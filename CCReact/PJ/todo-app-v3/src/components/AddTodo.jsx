import { useState,useRef } from "react";
import styles from "./AddTodo.module.css"
import TodoItem from "./TodoItem";
function AddTodo({Tasks,onNewItem,onDeleteClick}){
const toDoNameElement=useRef(null);
const dueDateElement=useRef(null);
const handleAddClick=(e)=>{
  e.preventDefault();
  const todoName=toDoNameElement.current.value;
  const dueDate=dueDateElement.current.value;
  onNewItem(todoName,dueDate);
  toDoNameElement.current.value="";
  dueDateElement.current.value=""
}
return <>
<form className="add-container " onSubmit={handleAddClick}>
  <input  ref={toDoNameElement}  className={`${styles[`addTodo`]}`}  type="text" placeholder="Enter Task Here" />
  <input  ref={dueDateElement}  className={`${styles[`addTodo`]} ${styles.date}`} type="date" />
  <button  className={styles.button } >Add</button>
</form>
{Tasks.map(item=><TodoItem key={item.task} todoTask={item.task} todoDate={item.deadline} handleDeleteClick={()=>{onDeleteClick(item)}} />)}
</>
}
export default AddTodo;