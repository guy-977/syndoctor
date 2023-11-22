'use client'

export default function Nav(){
    return(
        <nav className="p-4 flex items-center justify-between">
        <div className="flex items-center flex-col">
          <h1 className="text-5xl font-bold"><a href="/">SynDoctor</a></h1>
          <span className="text-xs text-yellow-400 py-1">This project is still in progress and some features may not work properly</span>
        </div>
        <ul className="flex items-center space-x-4">
          <li><a href="/upload">Upload</a></li>
          <li><a href="/upload">About us</a></li>
        </ul>
      </nav>
    )
}