import {  createContext, useCallback, useReducer } from "react";

export const PostList=createContext({
  postList:[],
  addInitialPosts:()=>{},
  addPost:()=>{},
  deletePost:()=>{}
})

const DEFAULT_POST_LIST=[];

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
return [...newPostList]
}

const PostListProvider=({children})=>{

  const[postList,dispatchPostList]=useReducer(postListReducer,DEFAULT_POST_LIST)
  const addPost=(obj)=>{
    const addItemAction={
      type:"ADD_ITEM",
      payload:{
        id:Date.now(),
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
  const deletePost=useCallback((id)=>{
    const deleteItemAction={
      type:"DELETE_ITEM",
      payload:{
        postId:id
      }
    }
    dispatchPostList(deleteItemAction);
  },[dispatchPostList])

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


export default PostListProvider;