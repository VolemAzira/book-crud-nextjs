"use client";

import Link from "next/link";
import axios from "axios";

export default function register() {
  return (
    <main className="flex h-screen items-center justify-center">
      <form
        action=""
        className="flex flex-col gap-5 text-center bg-primary p-10 rounded-xl"
      >
        <h1 className="font-bold text-slate-200">REGISTER AN ACCOUNT</h1>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Username"
          className="w-full px-2 py-1 rounded"
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          className="w-full px-2 py-1 rounded"
        />
        <label
          htmlFor="confirmPassword"
          className="text-start text-sm text-white"
        >
          Confirm Password
        </label>
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="Password"
          className="w-full px-2 py-1 rounded"
        />
        <button
          type="submit"
          className="w-full bg-white text-black rounded font-semibold py-1"
        >
          Register
        </button>
        <p className="text-sm text-white">
          Already have an account?{" "}
          <Link href="/" className="underline font-semibold">
            Login
          </Link>
        </p>
      </form>
    </main>
  );
}
