function AppContent() {
  return (
    <>
      <div className="grid grid-cols-6 grid-rows-2 gap-4 w-4/5">
        <div className="col-span-3 rounded-lg border border-neutral-400 text-left p-1">
          <input type="text" placeholder="Enter Todo Here" />
        </div>
        <div className="col-span-2 rounded-lg border border-neutral-400 p-1">
          <input type="date" />
        </div>
        <div className=" rounded-md bg-green-500 text-white shadow-lg shadow-teal-200 p-2 ">
          Add
        </div>
        <div className="col-span-3 ">Buy Milk</div>
        <div className="col-span-2 ">04/10/2023</div>
        <div className="rounded-md bg-rose-800 text-white shadow-lg shadow-stone-500 p-2">
          Delete
        </div>
        <div className="col-span-3  ">Go to College</div>
        <div className="col-span-2 ">04/10/2023</div>
        <div className="rounded-md bg-rose-800 text-white shadow-lg shadow-stone-500 p-2">
          Delete
        </div>
      </div>
    </>
  );
}

export default AppContent;
