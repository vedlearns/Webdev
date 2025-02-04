import { createContext } from "react";
import { useReducer } from "react";

export const TodoItemsContext = createContext({
  items: [],
  addNewItem: () => {},
  deleteItem: () => {},
});

const todoItemsReducer=(currentTodoItems,action)=>{
 
  let newTodoItems=currentTodoItems; 

  if(action.type==='NEW_ITEM')
   {
   newTodoItems = [...currentTodoItems, { task: action.payload.todoTask, deadline: action.payload.dueDate }];
   }
   else if(action.type==='DELETE_ITEM')
   {
    newTodoItems = currentTodoItems.filter((value)=>value.task!=action.payload.itemName)
   }
return newTodoItems;
}

const TodoItemsContextProvider = ({children}) => {
  const [Items, dispatchTodoItems] = useReducer(todoItemsReducer, []);
  const addNewItem = (todoTask, dueDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        todoTask,
        dueDate,
      },
    };
    dispatchTodoItems(newItemAction);
  };
  const deleteItem = (item) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName: item.task,
      },
    };
    dispatchTodoItems(deleteItemAction);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        items: Items,
        addNewItem,
        deleteItem,
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};

export default TodoItemsContextProvider;
