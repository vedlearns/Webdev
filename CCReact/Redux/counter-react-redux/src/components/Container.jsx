const Container = ({ children }) => {
  return (
    <>
      <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-blue-800 dark:border-gray-700" style={{width:"100%"}}>
        {children}
      </div>
    </>
  );
};

export default Container;
