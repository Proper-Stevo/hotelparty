function index() {
  return (
    <>
      <div>
        <div className="py-12 px-4 flex items-center justify-center">
          <div className="bg-white w-full shadow rounded mx-auto pb-10 px-6 flex items-center">
            <div className="flex justify-start items-center py-1 relative border rounded border-gray-300  outline-none">
              <svg
                fill="black"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                viewBox="0 0 24 24"
                height="2.5em"
                width="2.5em"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <path d="M15 10 A3 3 0 0 1 12 13 A3 3 0 0 1 9 10 A3 3 0 0 1 15 10 z" />
              </svg>
              <input
                className="text-left text-black pl-2 w-full "
                type="text"
                placeholder="Search"
              />
            </div>
            <div className="flex mt-2 ml-4">
              <label className="text-sm text-left font-medium leading-none text-gray-800">
                Amount of Guest
              </label>
              <div className="flex justify-start items-center mt-2">
                <div className="flex justify-between  items-center w-full border rounded border-gray-300 md:px-6 px-3 py-1 lg:gap-x-2 md:gap-x-2 gap-x-1">
                  <button className="text-sm leading-none text-gray-600 p-2 hover:bg-indigo-100 hover:text-indigo-700 hover:rounded focus:bg-indigo-100 focus:text-indigo-700 focus:rounded">
                    -
                  </button>
                  <span className="text-sm leading-none text-gray-600 px-2">2</span>
                  <button className="text-sm leading-none text-gray-600 p-2 hover:bg-indigo-100 hover:text-indigo-700 hover:rounded focus:bg-indigo-100 focus:text-indigo-700 focus:rounded">
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className="flex mt-8 ml-4">
              <label className="text-sm text-left font-medium leading-none text-gray-800 ">
                Select Dates:
              </label>
              <div className="flex items-center border border-slate-300 px-4 py-3 rounded mt-2">
                <input type="date" id="datepicker" name="datepicker" className="text-black" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default index;
