import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        email: "",
        firstName: "",
        lastName: "",
        password: "",
        address: "",
        mobileNumber: "",
    });

    useEffect(() => {
        const token = localStorage.getItem("access_token");
        if (token) {
            navigate("/home");
        }
    }, [navigate]);

    const handleChange = (e) => {
        setUserData((prevValue) => ({
            ...prevValue,
            [e.target.id]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        fetch(
            "https://dms-backend-e2ecf4-8e992e-65-108-245-140.traefik.me/Auth/customer-signup/",
            {
                method: "POST",
                body: JSON.stringify({
                    email: userData.email,
                    first_name: userData.firstName,
                    last_name: userData.lastName,
                    password: userData.password,
                    address: userData.address,
                    mobile_number: userData.mobileNumber,
                }),
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
            }
        )
            .then(() => {
                navigate("/home");
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    return (
        <section className="min-h-screen flex items-center justify-center font-mono bg-gradient-to-r from-cyan-500 from-10% via-indigo-500 via-50% to-sky-500 to-100%">
            <div className="flex shadow-2xl">
                <img
                    src="src/assets/login.jpg"
                    className="w-[450px] object-cover xl:rounded-l-xl xl:block hidden"
                ></img>
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col items-center justify-center text-center p-16 gap-4 bg-white rounded-2xl xl:rounded-l-none"
                >
                    <h1 className="text-5xl font-bold">WELCOME</h1>
                    <p className="-mt-4">Create Your Account</p>
                    <div className="flex flex-col text-2xl text-left gap-1 -mt-4">
                        <span>Email*</span>
                        <input
                            id="email"
                            type="text"
                            required
                            value={userData.email}
                            onChange={handleChange}
                            className="rounded-md p-1 border-2 outline-none focus:border-cyan-500 focus:bg-slate-300"
                        ></input>
                    </div>
                    <div className="flex flex-col text-2xl text-left gap-1 -mt-4">
                        <span>First Name*</span>
                        <input
                            id="firstName"
                            type="text"
                            required
                            value={userData.firstName}
                            onChange={handleChange}
                            className="rounded-md p-1 border-2 outline-none focus:border-cyan-500 focus:bg-slate-300"
                        ></input>
                    </div>
                    <div className="flex flex-col text-2xl text-left gap-1 -mt-4">
                        <span>Last Name*</span>
                        <input
                            id="lastName"
                            type="text"
                            required
                            value={userData.lastName}
                            onChange={handleChange}
                            className="rounded-md p-1 border-2 outline-none focus:border-cyan-500 focus:bg-slate-300"
                        ></input>
                    </div>
                    <div className="flex flex-col text-2xl text-left gap-1 -mt-4">
                        <span>Password*</span>
                        <input
                            id="password"
                            type="password"
                            required
                            value={userData.password}
                            onChange={handleChange}
                            className="rounded-md p-1 border-2 outline-none focus:border-cyan-500 focus:bg-slate-300"
                        ></input>
                    </div>
                    <div className="flex flex-col text-2xl text-left gap-1 -mt-4">
                        <span>Address*</span>
                        <input
                            id="address"
                            type="text"
                            required
                            value={userData.address}
                            onChange={handleChange}
                            className="rounded-md p-1 border-2 outline-none focus:border-cyan-500 focus:bg-slate-300"
                        ></input>
                    </div>
                    <div className="flex flex-col text-2xl text-left gap-1 -mt-4">
                        <span>Mobile Number*</span>
                        <input
                            id="mobileNumber"
                            type="text"
                            required
                            value={userData.mobileNumber}
                            onChange={handleChange}
                            className="rounded-md p-1 border-2 outline-none focus:border-cyan-500 focus:bg-slate-300"
                        ></input>
                    </div>
                    <button
                        type="submit"
                        className="px-10 py-2 text-2xl rounded-md bg-gradient-to-tr from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"
                    >
                        Sign Up
                    </button>
                    <p>
                        Already have an account.
                        <a href="/" className="text-blue-400 hover:underline">
                            Log In
                        </a>
                    </p>
                </form>
            </div>
        </section>
    );
};

export default SignupPage;
