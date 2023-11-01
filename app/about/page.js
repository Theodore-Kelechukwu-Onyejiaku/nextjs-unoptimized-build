
export default function page() {
  return (
    <div className="mx-5">
      <div className="text-red-700 my-7">
        <a href="/">Home</a>
        <a href="/about" className="ml-3">About</a>
      </div>
      <h1 className="text-3xl font-bold">About Turing</h1>
      <div className='w-full lg:w-1/2 my-3'>
        <p className="text-lg font-bold mt-7 mb-1">
          The world’s most deeply vetted
          developers and teams,
          matched by AI.
        </p>
        <p className="text-sm">
          A software-first solution to any engineering problem. Use Turing to hire and manage the right remote developers, leads, and other tech talent for your resource needs.
        </p>

      </div>
    </div>
  )
}
