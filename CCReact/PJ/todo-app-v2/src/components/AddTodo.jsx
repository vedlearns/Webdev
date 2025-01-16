import styles from "./AddTodo.module.css"
import TodoItem from "./TodoItem";
function AddTodo({Tasks}){
return <>
<div className="add-container ">
  <input className={`${styles[`addTodo`]}`}  type="text" placeholder="Enter Task Here" />
  <input className={`${styles[`addTodo`]} ${styles.date}`} type="date" />
  <button className={styles.button } > Add</button>
</div>
{Tasks.map(item=><TodoItem key={item} todoTask={item.task} todoDate={item.deadline} />)}
</>
}
export default AddTodo;