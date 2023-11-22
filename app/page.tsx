import Button from "@/components/Button";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <div className='App'>
      <Nav />
      <header className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="back.jpg" alt="Background Image" className="w-full h-full object-cover filter blur-md"/>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          <h1 className="text-5xl font-bold text-center mb-4">SynDoctor</h1>
          <p className="text-lg opacity-75 text-center">Tagline</p>
          <Button />
        </div>
      </header>
      <main className="flex justify-center items-center">
        {/* View proccessed models */}
        <div className="grid grid-cols-1 gap-4 font-mono text-white text-center rounded-lg w-screen h-[50vh] px-4 justify-items-center">
          {/* Lung */}
          <div className="m-4 p-2 w-1/2 rounded-lg shadow-lg bg-emerald-600 flex flex-col justify-center justify-items-center items-center"><a className="text-3xl font-bold p-10" href="/upload">Lung Sample</a></div>
        </div>
      </main>
    </div>
  )
}
