import {useSelector} from "react-redux"

const DisplayCounter = () => {

const counter= useSelector(store=>store.counter)

  return (
    <>
      <p className="my-6 max-w-3xl text-base/7 text-white">
      Counter Current Value {counter}</p>
    </>
  );
};

export default DisplayCounter;
