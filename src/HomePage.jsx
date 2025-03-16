import React from 'react'

const HomePage = () => {
  return (
    <section className="min-h-screen flex items-center justify-center font-mono bg-gradient-to-r from-cyan-500 from-10% via-indigo-500 via-50% to-sky-500 to-100%">
      <div className="flex flex-col">
        <h1 className="font-extrabold text-9xl border-4 rounded-3xl p-4 bg-gradient-to-tr from-green-400 to-cyan-500 hover:from-pink-500 hover:to-yellow-500">HOME PAGE</h1>
        <p className="p-4 self-center hover:text-indigo-700"><a href='/'>Back to Login</a></p>
      </div>
    </section>
  )
}

export default HomePage