
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";


export default function Register() {

  const handleRegister = async (formData: FormData) => {
    "use server"
    console.log(formData);
    console.log("register ini");
    const user = {
      name: formData.get("name"),
      username: formData.get("username"),
      email: formData.get("email"),
      password: formData.get("password"),
    }
    const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/api/users/register", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json"
      }
    })
    redirect("/login")
  }
  return (
    <div className="bg-black flex justify-center items-center h-screen">
      {/* Left: Image */}
      <div className="w-1/2 h-screen hidden lg:block">
        <Image
          src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Placeholder Image"
          className="object-cover w-full h-full"
          width={500}
          height={500}
          priority={true}
        />
      </div>
      {/* Right: Login Form */}
      <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
        <h1 className="text-2xl font-semibold mb-4">Register</h1>
        <form action={handleRegister}>
          {/* Name Input */}
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-300">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="text-black w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autoComplete="off"
            />
          </div>
          {/* Username Input */}
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-300">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="text-black w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autoComplete="off"
            />
          </div>
          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-300">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className="text-black w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
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
              className="text-black w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autoComplete="off"
            />
          </div>
          {/* aggrement Checkbox */}
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="remember"
              name="remember"
              className="text-blue-500"
            />
            <label htmlFor="remember" className="text-gray-300 ml-2">
              Yes. I agree to Terms of Service
            </label>
          </div>
          {/* Login Button */}
          <div className="flex justify-between text-center">
            <button
              className="bg-blue-500 hover:bg-red-500 text-white font-semibold rounded-md py-2 px-4 w-full mt-5"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
