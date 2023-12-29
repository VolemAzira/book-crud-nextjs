"use client";

import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = {
        email,
        password,
      };

      console.log(data);

      const response = await axios.post(`${serverUrl}/api/login`, data, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      router.push("/");
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
        onSubmit={handleLogin}
        className="flex flex-col gap-5 text-center bg-primary p-10 rounded-xl"
      >
        <h1 className="font-bold text-slate-200">LOGIN ACCOUNT</h1>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="email"
          className="w-full px-2 py-1 rounded"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
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
