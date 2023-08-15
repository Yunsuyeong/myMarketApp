import { NextPage } from "next";

const ProfileEdit: NextPage = () => {
  return (
    <div className="px-3 py-4 space-y-4">
      <div className="flex items-center space-x-2">
        <div className="w-12 h-12 rounded-full bg-white" />
        <label
          htmlFor="picture"
          className="px-2 py-3 rounded-sm shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 border border-white cursor-pointer"
        >
          Change
          <input type="file" className="hidden" id="picture" accept="image/*" />
        </label>
      </div>
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium">
          Email Address
        </label>
        <input
          id="email"
          required
          type="text"
          className="appearance-none w-full text-md text-black font-medium px-2 py-2 border border-white rounded-sm shadow-sm placeholder-black focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter Email Address"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="phone" className="text-sm font-medium">
          Phone Number
        </label>
        <div className="flex rounded-sm shadow-sm">
          <span className="flex justify-center items-center rounded-l-md px-2 border-r-0 border border-white bg-white text-black select-none">
            +82
          </span>
          <input
            id="phone"
            required
            type="number"
            className="appearance-none w-full text-md text-black font-medium px-2 py-2 border border-white rounded-sm shadow-sm placeholder-black focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter Phone Number"
          />
        </div>
      </div>
      <button className="w-full py-2 px-2 mt-2 bg-blue-300 hover:bg-blue-500 rounded-sm shadow-sm border border-transparent text-md focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:outline-none">
        Edit Profile
      </button>
    </div>
  );
};

export default ProfileEdit;
