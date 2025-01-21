import React from "react";

const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="border-2 border-emerald-600 p-20">
        <form className="flex flex-col items-center justify-center">
          <input
            className="text-black outline-none bg-transparent place-holder:text-white border-2 border-emerald-600 rounded-full py-4 px-3 text-xl"
            type="email"
            name=""
            id=""
            placeholder="Enter your email"
          />
          <input
            className="text-black mt-3 outline-none bg-transparent place-holder:text-gray-400 border-2 border-emerald-600 rounded-full py-4 px-3 text-xl"
            type="password"
            placeholder="Enter your password"
          />
          <button className="text-white border-none  outline-none  place-holder:text-gray-400 border-2 bg-emerald-600 rounded-full py-4 px-3 text-xl mt-5">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

{
  /* <div className="flex items-center justify-center h-screen w-screen">
  <div className="border-2 border-red-600 p-4">
    <form
      onSubmit={(e) => {
        e.preventDefault(); // Prevents default submission
        // Handle form logic here
      }}
      className="flex flex-col items-center justify-center gap-4"
    >
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Enter your email"
        required
        className="border rounded p-2"
      />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Enter your password"
        required
        className="border rounded p-2"
      />
      <button type="submit" className="bg-blue-500 text-white rounded px-4 py-2">
        Submit
      </button>
    </form>
  </div>
</div> */
}
