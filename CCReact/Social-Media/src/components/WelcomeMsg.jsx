const WelcomeMsg = () => {
  return (
    <>
      <center>
        <div className=" rounded-2xl  w-70 bg-amber-800 m-5">
          <h1 className=" text-center py-15 text-white min-h-25">Add Posts</h1>
        </div>
        <button className="rounded-2xl text-white cursor-pointer p-2 m-5 bg-blue-600" >
          Get posts from Server
        </button>
      </center>
    </>
  );
};

export default WelcomeMsg;
