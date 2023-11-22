'use client'

import Link from "next/link"

export default function Button({link='/upload', text='Start Now'}){
    return(
        <Link href={link}>
          <button className="w-36 h-12 font-bold text-xl rounded-md text-white font-xl bg-green-800 text-[13px] border border-green-500 hover:bg-[#11401b] my-10">
            {text}
          </button>
        </Link>
    )
}