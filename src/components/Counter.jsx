import { useState } from "react";

function Counter({
    title,
    description = "count"
})  {

    

    const [count, setCount] = useState(0);
  // توابع مربوط به شمارنده اول
  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="bg-white w-6/12  flex flex-col justify-center items-center ">
      <div className="text-[#102A42] flex justify-center py-4 text-[40px] ">
        {title}
       
      </div>
      <div>
      {description}
      </div>
      <div className="text-[#102A42] flex justify-center text-[50px] font-medium">
        {count} {/* نمایش مقدار شمارنده دوم */}
      </div>

      <div className="flex justify-center py-6 gap-10 ">
        <button
          onClick={decrease} // فراخوانی تابع decrease برای شمارنده دوم
          className="border-[2px] border-[#222222] rounded-md w-36 uppercase"
        >
          decrease
        </button>
        <button
          onClick={reset} // فراخوانی تابع reset برای شمارنده دوم
          className="border-[2px] border-[#222222] rounded-md w-36 uppercase"
        >
          reset
        </button>
        <button
          onClick={increase} // فراخوانی تابع increase برای شمارنده دوم
          className="border-[2px] border-[#222222] rounded-md w-36 uppercase"
        >
          increase
        </button>
      </div>
    </div>
  );
}

export default Counter;
