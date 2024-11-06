const App = () => {
  return (
    <div className="bg-blue-200 h-screen flex justify-center items-start p-12 ">
      <div className="bg-white w-6/12 h-1/2 flex flex-col justify-center items-center p-36">
        <div className="text-[#102A42] flex justify-center py-4 text-[50px] font-medium">
          first counter
        </div>
        <div className="text-[#102A42] flex justify-center text-[50px] font-medium">
          0
        </div>

        <div className="flex justify-center py-6 gap-10 ">
          <button className="border-[2px] border-[#222222] rounded-md w-36 uppercase">
            decrease
          </button>
          <button className="border-[2px] border-[#222222] rounded-md w-36 uppercase">
            reset
          </button>
          <button className="border-[2px] border-[#222222] rounded-md w-36 uppercase">
            increase
          </button>
        </div>
      </div>

      {/* second div */}
      <div className="bg-white w-6/12 h-1/2 flex flex-col justify-center items-center p-36 mt-36">
        <div className="text-[#102A42] flex justify-center py-4 text-[50px] font-medium">
          second counter
        </div>
        <div className="text-[#102A42] flex justify-center text-[50px] font-medium">
          0
        </div>

        <div className="flex justify-center py-6 gap-10 ">
          <button className="border-[2px] border-[#222222] rounded-md w-36 uppercase">
            decrease
          </button>
          <button className="border-[2px] border-[#222222] rounded-md w-36 uppercase">
            reset
          </button>
          <button className="border-[2px] border-[#222222] rounded-md w-36 uppercase">
            increase
          </button>
        </div>
      </div>

    </div>
  );
};

export default App;