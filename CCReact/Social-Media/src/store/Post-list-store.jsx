import {  createContext, useReducer } from "react";

export const PostList=createContext({
  postList:[],
  addInitialPosts:()=>{},
  addPost:()=>{},
  deletePost:()=>{}
})

const postListReducer=(currPostList,action)=>{
  let newPostList=currPostList
  if(action.type==="ADD_ITEM")
  {
    newPostList=[action.payload,...currPostList]
  }
  else if(action.type==="ADD_INITIAL_ITEM")
  {
    newPostList=action.payload.posts;
  }
  else if(action.type==="DELETE_ITEM")
  {
    newPostList=currPostList.filter((item)=>item.id!==action.payload.postId)
  }
return newPostList
}

const PostListProvider=({children})=>{

  const[postList,dispatchPostList]=useReducer(postListReducer,DEFAULT_POST_LIST)
  const addPost=(obj)=>{
    const addItemAction={
      type:"ADD_ITEM",
      payload:{
        id:`${postList.length+1}`,
        title:obj.title,
        body:obj.body,
        reactions:4,
        userId:'user-40',
        tags:['Vacations','Mumbai','Enjoying']
      }
    }
    dispatchPostList(addItemAction);
  }
  const addInitialPosts=(posts)=>{
    const addItemAction={
      type:"ADD_INITIAL_ITEM",
      payload:{
       posts,
      }
    }
    dispatchPostList(addItemAction);
  }
  const deletePost=(id)=>{
    const deleteItemAction={
      type:"DELETE_ITEM",
      payload:{
        postId:id
      }
    }
    dispatchPostList(deleteItemAction);
  }

  return(
  <PostList.Provider value={{
    postList,
    addPost,
    addInitialPosts,
    deletePost,
  }}>
    {children}
  </PostList.Provider>
  )
}

const DEFAULT_POST_LIST=[
  // {
//   id:'1',
//   title:'Going to Mumbai',
//   body:'vacations. ',
//   reactions:'2',
//   userId:'user-9',
//   tags:['Vacations','Mumbai','Enjoying']
// },
//   {
//   id:'2',
//   title:'UG Done',
//   body:'Now Grad',
//   reactions:'3',
//   userId:'user-12',
//   tags:['Graduation','BTech','Enjoying']
// },
//   {
//   id:'3',
//   title:'Learning React',
//   body:'React reacting',
//   reactions:'4',
//   userId:'user-40',
//   tags:['React','Learn','WebDev']
// }
]

export default PostListProvider;