"use client";

import Link from "next/link";
import axios from "axios";
import { useState } from "react";

export default function register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPassword_confirmation] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const data = {
        name,
        email,
        password,
        password_confirmation,
      };

      console.log(data);

      const res = await axios.post(
        `https://book-crud-service-6dmqxfovfq-et.a.run.app/api/register`,
        data,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      console.log(res);
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
        onSubmit={handleRegister}
        className="flex flex-col gap-5 text-center bg-primary p-10 rounded-xl"
      >
        <h1 className="font-bold text-slate-200">REGISTER AN ACCOUNT</h1>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Full name"
          className="w-full px-2 py-1 rounded"
          onChange={(e) => setName(e.target.value)}
        />
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
        <label
          htmlFor="password_confirmation"
          className="text-start text-sm text-white"
        >
          Confirm Password
        </label>
        <input
          type="password"
          name="password_confirmation"
          id="password_confirmation"
          placeholder="Password"
          className="w-full px-2 py-1 rounded"
          onChange={(e) => setPassword_confirmation(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-white text-black rounded font-semibold py-1"
        >
          Register
        </button>
        <p className="text-sm text-white">
          Already have an account?{" "}
          <Link href="/login" className="underline font-semibold">
            Login
          </Link>
        </p>
      </form>
    </main>
  );
}
