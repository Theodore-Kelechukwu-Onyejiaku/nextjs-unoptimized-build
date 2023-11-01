// not server rendered
"use client"

import { useState } from "react";
import SeeMore from "./components/SeeMore";
// unused packages
import { useParams, useRouter, useSearchParams } from "next/navigation"
// no specific imports
import next from "next"
import moment from "moment";

function getDate() {
  const momentDate = moment();
  return momentDate.format('MMMM Do YYYY');
}

export default function Home() {
  const [seeMore, setSeeMore] = useState(false)
  console.log(seeMore)
  return (
    <div className="mx-5">
      <div className="text-red-700 my-7">
        <a href="/">Home</a>
        <a href="/about" className="ml-3">About</a>
      </div>
      <h1 className="text-3xl font-bold">Welcome to Turing {getDate()}</h1>
      <div className="flex flex-col justify-center items-center py-10">
        <img src="turing image.png" alt="turing" className="w-[500px] h-[500px]" />
      </div>
      <div>
        <button onClick={() => { setSeeMore(!seeMore) }} className="p-3 rounded shadow-xl border">See more...</button>
        {seeMore && <SeeMore />}
      </div>
    </div>
  )
}
