'use client'

import { use, useEffect, useState } from "react";

export default function Home() {

  const [count, setCount] = useState(0);

  function nextProblem(){
    
  }
  
  return (
    <>
    {
      (count == 0) && <div className="w-[480px] h-screen flex justify-center items-center flex-col bg-red-500 m-auto">
        <div>歡迎畫面</div>
        <div className="bg-black px-6 py-3">開始測驗</div>
      </div>
    }

    {
      (count == 1) && <div className="w-[480px] h-screen felx justify-center items-center flex-col bg-red-500 m-auto">
        <div>題目一</div>
        <div className="bg-black px-6 py-3">下一題</div>
      </div>
    }
    </>
  );
}
