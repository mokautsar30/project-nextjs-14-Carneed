import Image from "next/image";
import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function Login() {
  const handleLogin = async (formData: FormData) => {
    "use server";
    // console.log(formData);
    // console.log("login di tekan");
    const user = {
      username: formData.get("username"),
      password: formData.get("password"),
    };
    // console.log(user);

    const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/api/users/login", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const { access_token, username } = await response.json();
    cookies().set("Authorization", `Bearer ${access_token}`);
    cookies().set("username", `${username}`)
    console.log(username, "username cookie");
    redirect("/wishlist")
  };

  return (
    <div className="bg-black flex justify-center items-center h-screen">
      {/* Left: Image */}
      <div className="w-1/2 h-screen hidden lg:block">
        <Image
          src="https://images.unsplash.com/photo-1554294314-80a5fb7e6bd5?q=80&w=1996&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Placeholder Image"
          className="object-cover w-full h-full"
          width={500}
          height={500}
          priority={true}
        />
      </div>
      {/* Right: Login Form */}
      <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
        <h1 className="text-2xl font-semibold mb-4">Login</h1>
        <form action={handleLogin}>
          {/* Username Input */}
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-300">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 text-black"
              autoComplete="off"
            />
          </div>
          {/* Password Input */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-300">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 text-black"
              autoComplete="off"
            />
          </div>
          {/* Remember Me Checkbox */}
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="remember"
              name="remember"
              className="text-blue-500"
            />
            <label htmlFor="remember" className="text-gray-300 ml-2">
              Remember Me
            </label>
          </div>
          {/* Forgot Password Link */}
          <div className="mb-6 text-blue-500">
            <a href="#" className="hover:underline">
              Forgot Password?
            </a>
          </div>
          {/* Login Button */}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-900 text-white font-semibold rounded-md py-2 px-4 w-full mb-1"
          >
            Login
          </button>
          <div className="flex justify-between text-center">
            <Link
              href="/register"
              className="text-white font-semibold rounded-md py-2 px-0 w-full underline"
            >
              Need an account?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
