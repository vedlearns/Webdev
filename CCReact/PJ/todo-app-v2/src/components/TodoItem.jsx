import "./TodoItem.css"
function TodoItem({todoTask,todoDate}){
  return<>
  <div className="container">
  <div className="content" >{todoTask}</div>
  <div className="content">{todoDate}</div>
  <button className="button">Delete</button>
  </div>
  </>
}

export default TodoItem