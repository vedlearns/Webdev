import {  createContext, useReducer } from "react";

export const PostList=createContext({
  postList:[],
  addPost:()=>{},
  deletePost:()=>{}
})

const postListReducer=(currPostList,action)=>{
return currPostList
}

const PostListProvider=({children})=>{

  const[postList,dispatchPostList]=useReducer(postListReducer,DEFAULT_POST_LIST)

  const addPost=()=>{
    
  }
  const deletePost=()=>{

  }

  return(
  <PostList.Provider value={{
    postList,
    addPost,
    deletePost,
  }}>
    {children}
  </PostList.Provider>
  )
}

const DEFAULT_POST_LIST=[
  {
  id:'1',
  title:'Going to Mumbai',
  body:'Going Mumbai for vacations.',
  reactions:'2',
  userId:'user-9',
  tags:['Vacations','Mumbai','Enjoying']
},
  {
  id:'2',
  title:'UG Done',
  body:'Now Grad',
  reactions:'3',
  userId:'user-12',
  tags:['Graduation','BTech','Enjoying']
},
  {
  id:'3',
  title:'Learning React',
  body:'React reacting',
  reactions:'4',
  userId:'user-40',
  tags:['React','Learn','WebDev']
}
]

export default PostListProvider;