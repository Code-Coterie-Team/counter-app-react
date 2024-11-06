const App = () => {
  return (
    <div className="bg-blue-200 h-screen flex justify-center items-start p-12">
      <div className=" bg-white w-6/12 h-3/6 flex flex-col">
        <div className="text-[#102A42] flex justify-center py-4 text-[50px] font-medium">first counter</div>
        <div className="text-[#102A42] flex justify-center text-[50px] font-medium">0</div>

        <div className="flex justify-center py-6 gap-24 ">
           <button className="border-[3px] border-[#222222] rounded-md w-36 uppercase">decrease</button>
           <button>reset</button>
           <button>increase</button>
        </div>
      </div>
    </div>
  )
}

export default App;