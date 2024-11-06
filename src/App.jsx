import React, { useState } from "react";

const App = () => {
  // ایجاد state برای دو شمارنده
  const [firstCount, setFirstCount] = useState(0);
  const [secondCount, setSecondCount] = useState(0);

  // توابع مربوط به شمارنده اول
  const increaseFirst = () => {
    setFirstCount(firstCount + 1);
  };

  const decreaseFirst = () => {
    setFirstCount(firstCount - 1);
  };

  const resetFirst = () => {
    setFirstCount(0);
  };

  // توابع مربوط به شمارنده دوم
  const increaseSecond = () => {
    setSecondCount(secondCount + 1);
  };

  const decreaseSecond = () => {
    setSecondCount(secondCount - 1);
  };

  const resetSecond = () => {
    setSecondCount(0);
  };

  return (
    <div className="bg-blue-200 h-screen flex justify-center items-center p-12 flex-col">
      {/* دیو اول */}
      <div className="bg-white w-6/12 h-1/2 flex flex-col justify-center items-center p-36 mb-6">
        <div className="text-[#102A42] flex justify-center py-4 text-[40px]">
          first counter
        </div>
        <div className="text-[#102A42] flex justify-center text-[50px] font-medium">
          {firstCount} {/* نمایش مقدار شمارنده اول */}
        </div>

        <div className="flex justify-center py-6 gap-10 ">
          <button
            onClick={decreaseFirst} // فراخوانی تابع decrease برای شمارنده اول
            className="border-[2px] border-[#222222] rounded-md w-36 uppercase"
          >
            decrease
          </button>
          <button
            onClick={resetFirst} // فراخوانی تابع reset برای شمارنده اول
            className="border-[2px] border-[#222222] rounded-md w-36 uppercase"
          >
            reset
          </button>
          <button
            onClick={increaseFirst} // فراخوانی تابع increase برای شمارنده اول
            className="border-[2px] border-[#222222] rounded-md w-36 uppercase"
          >
            increase
          </button>
        </div>
      </div>

      {/* دیو دوم */}
      <div className="bg-white w-6/12 h-1/2 flex flex-col justify-center items-center p-36">
        <div className="text-[#102A42] flex justify-center py-4 text-[40px] ">
          second counter
        </div>
        <div className="text-[#102A42] flex justify-center text-[50px] font-medium">
          {secondCount} {/* نمایش مقدار شمارنده دوم */}
        </div>

        <div className="flex justify-center py-6 gap-10 ">
          <button
            onClick={decreaseSecond} // فراخوانی تابع decrease برای شمارنده دوم
            className="border-[2px] border-[#222222] rounded-md w-36 uppercase"
          >
            decrease
          </button>
          <button
            onClick={resetSecond} // فراخوانی تابع reset برای شمارنده دوم
            className="border-[2px] border-[#222222] rounded-md w-36 uppercase"
          >
            reset
          </button>
          <button
            onClick={increaseSecond} // فراخوانی تابع increase برای شمارنده دوم
            className="border-[2px] border-[#222222] rounded-md w-36 uppercase"
          >
            increase
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
