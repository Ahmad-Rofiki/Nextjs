"use client";

import Link from "next/link";

export default function LoginPage() {
  const handleLogin = (e: any) => {
    e.preventDefault();
    fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({
        email: e.currentTarget.email.value,
        password: e.currentTarget.password.value,
      }),
    });
  };

  return (
    <div className="flex h-[700px] w-full min-h-screen">
      <div className="w-full flex flex-col items-center justify-center">
        <form
          className="md:w-96 w-80 flex flex-col items-center justify-center"
          onSubmit={(e) => handleLogin(e)}
        >
          <h1 className="text-4xl text-white font-medium">Sign in</h1>
          <p className="text-sm text-gray-500/90 mt-3">
            Welcome back! Please sign in to continue
          </p>

          <div className="flex items-center gap-4 w-full my-5">
            <div className="w-full h-px bg-gray-300/90"></div>
            <p className="w-full text-nowrap text-sm text-gray-500/90">
              Have a nice day !
            </p>
            <div className="w-full h-px bg-gray-300/90"></div>
          </div>

          <div className="flex items-center w-full bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6 gap-2">
            <input
              type="email"
              placeholder="Email id"
              className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full"
              required
            />
          </div>

          <div className="flex items-center mt-6 w-full bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6 gap-2">
            <input
              type="password"
              placeholder="Password"
              className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full"
              required
            />
          </div>

          

          <button
            type="submit"
            className="mt-8 w-full h-11 rounded-full text-black bg-white hover:opacity-90 transition-opacity"
          >
            Login
          </button>
          <p className="text-gray-500/90 text-sm mt-4">
            Don’t have an account?{" "}
            <Link href="/register" className="text-white">
              {" "}
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
