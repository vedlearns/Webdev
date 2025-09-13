import styles from './CreatePost.module.css'
import { Form, redirect } from 'react-router-dom';
const CreatePost = () => {
  // const {addPost}=useContext(PostListContext);

  return (
    <>
    <div className={`${styles.container} flex bg-gray-800`} >
      <Form method='POST' >
        <div className={`${styles.title} `}>
          <label htmlFor="title">Title</label>
          <input  type="text" id="title" name="title" placeholder="Title" />
        </div>
        <div className={`${styles.body}`}>
          <label htmlFor="body">Body</label>
          <input  type="text" id="body" name="body" placeholder="body" />
        </div>
        <div className={`${styles.body}`}>
          <label htmlFor="body">UserID</label>
          <input  type="text" id="userId" name="userId" placeholder="body" />
        </div>
        <div className={`${styles.buttonContainer}`}>
        <button type='submit'  className={`${styles.button}`}>Post</button>
        </div> 
      </Form>
      </div>
    </>
  );
};

export async function createPostAction(data){
 const formData=await data.request.formData();
 const postData=Object.fromEntries(formData)
  fetch('https://dummyjson.com/posts/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(postData)
})
.then(res => res.json())
.then(data=>(console.log(data)))
return redirect("/")
}

export default CreatePost;
