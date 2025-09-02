 import { useRef ,useContext } from 'react';
import styles from './CreatePost.module.css'
import {PostList as PostListContext }from "../store/Post-list-store"
import { useNavigate } from 'react-router-dom';
const CreatePost = () => {
  const {addPost}=useContext(PostListContext);
  const titleElement=useRef();
  const bodyElement=useRef();
  const navigate=useNavigate();

  const handleAddPost=(e)=>{
    e.preventDefault();
  const data={
    title:titleElement.current.value,
    body:bodyElement.current.value
  }
  fetch('https://dummyjson.com/posts/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    title: 'I am in love with someone.',
    body:"this is body",
    reactions:4,
    userId:5,
  })
})
.then(res => res.json())
.then(data=>(addPost(data),console.log(data),navigate("/")))
  bodyElement.current.value="";
  titleElement.current.value="";
   
  }
  return (
    <>
    <div className={`${styles.container} flex bg-gray-800`} >
      <form onSubmit={handleAddPost}>
        <div className={`${styles.title} `}>
          <label htmlFor="title">Title</label>
          <input ref={titleElement}  type="text" id="title" name="title" placeholder="Title" />
        </div>
        <div className={`${styles.body}`}>
          <label htmlFor="body">Body</label>
          <input ref={bodyElement}  type="text" id="body" name="body" placeholder="body" />
        </div>
        <div className={`${styles.buttonContainer}`}>
        <button type='submit'  className={`${styles.button}`}>Post</button>
        </div> 
      </form>
      </div>
    </>
  );
};

export default CreatePost;
