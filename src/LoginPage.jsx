import React, {useState} from 'react'

const LoginPage = () => {
  const [emailval, setEmailrval] = useState("")
  const [passval, setPassval] = useState("")
  const handleEmailChange=(e) => {setEmailrval(e.target.value)}
  const handlePassChange=(e) => {setPassval(e.target.value)}
  const handleClick=(e)=>{
    e.preventDefault()
    fetch("https://dms-backend-e2ecf4-8e992e-65-108-245-140.traefik.me/Auth/login/", {
      method: "POST",
      body: JSON.stringify({
        email: emailval,
        password:passval
      }),
    })
    .then((response) => response.json())
    .then((data) => {
      if(data.message==="SUCCESS"){
        alert("Logged In")
      } else {
        alert("Sorry")
        console.log(data.message)
      }
  })
}
  return (
    <section className="min-h-screen flex items-center justify-center font-mono bg-gradient-to-r from-cyan-500 from-10% via-indigo-500 via-50% to-sky-500 to-100%">
      <div className="flex shadow-2xl">
        <div className="flex flex-col items-center justify-center text-center py-20 px-16 gap-8 bg-white rounded-2xl xl:rounded-r-none">
          <h1 className="text-5xl font-bold">WELCOME BACK</h1>
          <p className="-mt-8">Enter your credentials for Login</p>
          <div className="flex flex-col text-2xl text-left gap-1">
            <span>Email</span>
            <input type="text" value={emailval} onChange={handleEmailChange} className="rounded-md p-1 border-2 outline-none focus:border-cyan-500 focus:bg-slate-300"></input>
          </div>
          <div className="flex flex-col text-2xl text-left gap-1">
            <span>Password</span>
            <input type="password" value={passval} onChange={handlePassChange} className="rounded-md p-1 border-2 outline-none focus:border-cyan-500 focus:bg-slate-300"></input>
          </div>
          <div className="flex gap-1 items-center">
            <input type="checkbox"/>
            <span className="text-base">Remember Password</span>
          </div>
          <button type='submit' onClick={handleClick} className="px-10 py-2 text-2xl rounded-md bg-gradient-to-tr from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"><a>Login</a></button>
          <p>Don't have an account. <a href="/signup" className="text-blue-400 hover:underline">Sign Up</a></p>
        </div>
        <img src="src/assets/login.jpg" className="w-[450px] object-cover xl:rounded-r-xl xl:block hidden"></img>
      </div>
    </section>
  )
}

export default LoginPage