import { useRef } from "react";
import { useDispatch } from "react-redux";

const Controls = () => {
  const num = useRef(); 
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };
  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };
  const handleAdd = () => {
    dispatch({ type: "ADD" ,payload:{num:num.current.value}});
    num.current.value="";
  };
  const handleSubtract = () => {
    dispatch({ type: "SUBTRACT" ,payload:{num:num.current.value}});
    num.current.value="";
  };
  const handlePrivacy = () => {
    dispatch({ type: "PRIVACY"});

  };

  return (
    <>
      <div>
        <button
          type="button"
          onClick={handleIncrement}
          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          +1
        </button>
        <button
          onClick={handleDecrement}
          type="button"
          className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          -1
        </button>
        <button
          onClick={handlePrivacy}
          type="button"
          className="focus:outline-none text-white bg-orange-600 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orangez-900"
        >
          Privacy
        </button>
      </div>
      <div>
        <input 
        ref={num}
        className="bg-white rounded-2xl px-2 mb-2 w-[70%]" 
        type="text" />
        <button
          onClick={handleAdd}
          type="button"
          className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
        >
          Add
        </button>
        <button
          onClick={handleSubtract}
          type="button"
          className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        >
          Subtract
        </button>
      </div>
    </>
  );
};

export default Controls;