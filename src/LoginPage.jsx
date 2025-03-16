import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        email: "",
        password: "",
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

    const handleClick = (e) => {
        e.preventDefault();
        fetch(
            "https://dms-backend-e2ecf4-8e992e-65-108-245-140.traefik.me/Auth/login/",
            {
                method: "POST",
                body: JSON.stringify({
                    email: userData.email,
                    password: userData.password,
                }),
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
            }
        )
            .then((response) => response.json())
            .then((data) => {
                const { access, refresh } = data;
                localStorage.setItem("access_token", access);
                localStorage.setItem("refresh_token", refresh);

                navigate("/home");
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    return (
        <section className="min-h-screen flex items-center justify-center font-mono bg-gradient-to-r from-cyan-500 from-10% via-indigo-500 via-50% to-sky-500 to-100%">
            <div className="flex shadow-2xl">
                <form
                    onSubmit={handleClick}
                    className="flex flex-col items-center justify-center text-center py-20 px-16 gap-8 bg-white rounded-2xl xl:rounded-r-none"
                >
                    <h1 className="text-5xl font-bold">WELCOME BACK</h1>
                    <p className="-mt-8">Enter your credentials for Login</p>
                    <div className="flex flex-col text-2xl text-left gap-1">
                        <span>Email*</span>
                        <input
                            id="email"
                            required
                            type="text"
                            value={userData.email}
                            onChange={handleChange}
                            className="rounded-md p-1 border-2 outline-none focus:border-cyan-500 focus:bg-slate-300"
                        ></input>
                    </div>
                    <div className="flex flex-col text-2xl text-left gap-1">
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
                    <div className="flex gap-1 items-center">
                        <input type="checkbox" />
                        <span className="text-base">Remember Password</span>
                    </div>
                    <button
                        type="submit"
                        className="px-10 py-2 text-2xl rounded-md bg-gradient-to-tr from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"
                    >
                        Login
                    </button>
                    <p>
                        Don't have an account.{" "}
                        <a
                            href="/signup"
                            className="text-blue-400 hover:underline"
                        >
                            Sign Up
                        </a>
                    </p>
                </form>
                <img
                    src="src/assets/login.jpg"
                    className="w-[450px] object-cover xl:rounded-r-xl xl:block hidden"
                ></img>
            </div>
        </section>
    );
};

export default LoginPage;
