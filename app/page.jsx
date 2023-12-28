"use client";

import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = {
        username,
        password,
      };

      const response = await axios.post(
        `https://book-crud-service-6dmqxfovfq-et.a.run.app/api/login`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log(response);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Axios error:", error.message);
      } else {
        console.error("Unexpected error:", error);
      }
    }
  };

  return (
    <main className="flex h-screen items-center justify-center">
      <form
        // onSubmit={handleLogin}
        onSubmit={() => useRouter().push("/add")}
        className="flex flex-col gap-5 text-center bg-primary p-10 rounded-xl"
      >
        <h1 className="font-bold text-slate-200">LOGIN ACCOUNT</h1>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Username"
          aria-label="Username"
          className="w-full px-2 py-1 rounded"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          aria-label="Password"
          className="w-full px-2 py-1 rounded"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-white text-black rounded font-semibold py-1"
        >
          Login
        </button>
        <p className="text-sm text-white">
          Dont have an account?{" "}
          <Link href="/register" className="underline font-semibold">
            Register
          </Link>
        </p>
      </form>
    </main>
  );
}
