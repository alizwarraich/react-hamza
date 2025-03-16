import React, { useState } from "react";

const SignupPage = () => {
    const [fnval, setFnval] = useState();
    const [lnval, setLnval] = useState();
    const [emailval, setEmailval] = useState();
    const [passval, setPassval] = useState();
    const [addval, setAddval] = useState();
    const [numval, setNumval] = useState();
    const handleFnChange = (e) => {
        setFnval(e.target.value);
    };
    const handleLnChange = (e) => {
        setLnval(e.target.value);
    };
    const handleEmailChange = (e) => {
        setEmailval(e.target.value);
    };
    const handlePassChange = (e) => {
        setPassval(e.target.value);
    };
    const handleAddChange = (e) => {
        setAddval(e.target.value);
    };
    const handleNumChange = (e) => {
        setNumval(e.target.value);
    };

    return (
        <section className="min-h-screen flex items-center justify-center font-mono bg-gradient-to-r from-cyan-500 from-10% via-indigo-500 via-50% to-sky-500 to-100%">
            <div className="flex shadow-2xl">
                <img
                    src="src/assets/login.jpg"
                    className="w-[450px] object-cover xl:rounded-l-xl xl:block hidden"
                ></img>
                <div className="flex flex-col items-center justify-center text-center p-16 gap-4 bg-white rounded-2xl xl:rounded-l-none">
                    <h1 className="text-5xl font-bold">WELCOME</h1>
                    <p className="-mt-4">Create Your Account</p>
                    <div className="flex flex-col text-2xl text-left gap-1 -mt-4">
                        <span>Email</span>
                        <input
                            type="text"
                            value={emailval}
                            onChange={handleEmailChange}
                            className="rounded-md p-1 border-2 outline-none focus:border-cyan-500 focus:bg-slate-300"
                        ></input>
                    </div>
                    <div className="flex flex-col text-2xl text-left gap-1 -mt-4">
                        <span>First Name</span>
                        <input
                            type="text"
                            value={fnval}
                            onChange={handleFnChange}
                            className="rounded-md p-1 border-2 outline-none focus:border-cyan-500 focus:bg-slate-300"
                        ></input>
                    </div>
                    <div className="flex flex-col text-2xl text-left gap-1 -mt-4">
                        <span>Last Name</span>
                        <input
                            type="text"
                            value={lnval}
                            onChange={handleLnChange}
                            className="rounded-md p-1 border-2 outline-none focus:border-cyan-500 focus:bg-slate-300"
                        ></input>
                    </div>
                    <div className="flex flex-col text-2xl text-left gap-1 -mt-4">
                        <span>Password</span>
                        <input
                            type="password"
                            value={passval}
                            onChange={handlePassChange}
                            className="rounded-md p-1 border-2 outline-none focus:border-cyan-500 focus:bg-slate-300"
                        ></input>
                    </div>
                    <div className="flex flex-col text-2xl text-left gap-1 -mt-4">
                        <span>Address</span>
                        <input
                            type="text"
                            value={addval}
                            onChange={handleAddChange}
                            className="rounded-md p-1 border-2 outline-none focus:border-cyan-500 focus:bg-slate-300"
                        ></input>
                    </div>
                    <div className="flex flex-col text-2xl text-left gap-1 -mt-4">
                        <span>Mobile Number</span>
                        <input
                            type="text"
                            value={numval}
                            onChange={handleNumChange}
                            className="rounded-md p-1 border-2 outline-none focus:border-cyan-500 focus:bg-slate-300"
                        ></input>
                    </div>
                    <button className="px-10 py-2 text-2xl rounded-md bg-gradient-to-tr from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">
                        <a href="/">Sign Up</a>
                    </button>
                    <p>
                        Already have an account.
                        <a href="/" className="text-blue-400 hover:underline">
                            Log In
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default SignupPage;
