import { useState } from "react";

function cls(...classnames: string[]) {
  return classnames.join(" ");
}

const Enter = () => {
  const [auth, setAuth] = useState<"email" | "phone">("email");
  const onChange = (e: any) => setAuth(e.target.value);
  const onEmailClick = () => setAuth("email");
  const onPhoneClick = () => setAuth("phone");
  return (
    <div className="px-4 mt-16">
      <h1 className="text-3xl font-bold text-center">Welcome!</h1>
      <div className="mt-12">
        <div className="flex flex-col items-center">
          <div className="w-full flex gap-4 items-center justify-center">
            <h3 className="text-md font-medium">Enter using</h3>
            <select
              onChange={onChange}
              className="text-sm text-black rounded-lg border-1 hover:border-blue-500"
            >
              <option value="email">Email</option>
              <option value="phone">Phone</option>
            </select>
          </div>
          {/* <div className="w-full grid grid-cols-2 mt-8">
            <button
              onClick={onEmailClick}
              className={cls(
                "text-sm font-medium border-b-2 pb-4",
                auth === "email"
                  ? "border-blue-300 text-blue-500"
                  : "border-transparent hover:text-gray-400"
              )}
            >
              Email
            </button>
            <button
              onClick={onPhoneClick}
              className={cls(
                "text-sm font-medium border-b-2 pb-4",
                auth === "phone"
                  ? "border-blue-400 text-blue-500"
                  : "border-transparent hover:text-gray-400"
              )}
            >
              Phone
            </button>
          </div> */}
        </div>
        <form className="flex flex-col mt-8">
          <label htmlFor="input" className="text-sm font-medium">
            {auth === "email" ? "Email Address" : null}
            {auth === "phone" ? "Phone Number" : null}
          </label>
          <div className="mt-2">
            {auth === "email" ? (
              <input
                id="input"
                required
                type="text"
                className="appearance-none w-full text-md text-black font-medium px-2 py-2 border border-white rounded-sm shadow-sm placeholder-black focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter Email Address"
              />
            ) : null}
            {auth === "phone" ? (
              <div className="flex rounded-sm shadow-sm">
                <span className="flex justify-center items-center rounded-l-md px-2 border-r-0 border border-white bg-white text-black select-none">
                  +82
                </span>
                <input
                  id="input"
                  required
                  type="number"
                  className="appearance-none w-full text-md text-black font-medium px-2 py-2 border border-white rounded-sm shadow-sm placeholder-black focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter Phone Number"
                />
              </div>
            ) : null}
          </div>
          <button className="py-2 px-2 mt-2 bg-blue-300 hover:bg-blue-500 rounded-sm shadow-sm border border-transparent text-md focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:outline-none">
            {auth === "email" ? "Get Login Link" : null}
            {auth === "phone" ? "Get One-time Password" : null}
          </button>
        </form>
        <div className="grid grid-cols-2 mt-2 gap-4">
          <button className="flex justify-center items-center py-2 px-4 border border-white rounded-sm shadow-sm text-sm font-medium bg-gray-500 hover:bg-black">
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          </button>
          <button className="flex justify-center items-center py-2 px-4 border border-white rounded-sm shadow-sm text-sm font-medium bg-gray-500 hover:bg-black">
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Enter;
