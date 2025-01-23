import "./TodoItem.css"
function TodoItem({todoTask,todoDate,handleDeleteClick}){
  return<>
  <div className="container">
  <div className="content" >{todoTask}</div>
  <div className="content">{todoDate}</div>
  <button onClick={handleDeleteClick} className="button">Delete</button>
  </div>
  </>
}

export default TodoItem