import {useEffect   , useState , createContext, useCallback, useReducer } from "react";

export const PostList=createContext({
  postList:[],
  fetching:false,
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
  const [fetching, setFetching] = useState(false);


  const addPost=(obj)=>{
    const addItemAction={
      type:"ADD_ITEM",
      payload:{
        id:obj.id,
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

  useEffect(() => {
    if(postList.length>0) return;     // restricting unnecessary api calls
    setFetching(true);
    const controller = new AbortController();
    const signal = controller.signal;
  
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        if (!signal.aborted) {
          addInitialPosts(data.posts);
          setFetching(false);
        }
      })
      .catch((error) => {
        if (error.name !== "AbortError") {
          console.error("Fetch error:", error);
          setFetching(false); // Only update fetching if it's NOT an abort error
        }
      });
  
    return () => {
      controller.abort();
    };
  }, []);


  return(
  <PostList.Provider value={{
    postList,
    addPost,
    fetching,
    deletePost,
  }}>
    {children}
  </PostList.Provider>
  )
}


export default PostListProvider;