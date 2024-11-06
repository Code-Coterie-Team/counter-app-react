import React, { useState } from "react";
import Counter from "./components/Counter";

const App = () => {


  return (
    <div className=" flex justify-center items-center p-12 flex-col gap-5">
     
     <Counter title="onecounter" description="the 1 counter"/>
     <Counter title="twocounter"/>
     <Counter title="threecounter"/>
     <Counter title="fourecounter"/>
     
    
    
    </div>
  );
};

export default App;
