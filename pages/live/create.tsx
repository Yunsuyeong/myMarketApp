import { NextPage } from "next";

const LiveCreate: NextPage = () => {
  return (
    <div className="px-3 py-4 space-y-4">
      <div>
        <label htmlFor="name" className="text-sm font-medium mb-2 block">
          Name
        </label>
        <div className="relative flex items-center rounded-sm shadow-sm">
          <input
            id="name"
            type="email"
            required
            placeholder="Write a Name"
            className="appearance-none w-full text-md text-black font-medium px-2 py-2 border border-white rounded-sm shadow-sm placeholder-black focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>
      <div>
        <label htmlFor="price" className="text-sm font-medium mb-2 block">
          Price
        </label>
        <div className="relative flex items-center rounded-sm shadow-sm">
          <div className="absolute left-0 flex justify-center items-center pl-2 pointer-events-none">
            <span className="text-sm text-black">$</span>
          </div>
          <input
            id="price"
            type="text"
            required
            placeholder="0.00"
            className="appearance-none w-full text-md text-black font-medium px-3 py-2 pl-6 border border-white rounded-sm shadow-sm placeholder-black focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          <div className="absolute right-0 flex items-center pr-2 pointer-events-none">
            <span>USD</span>
          </div>
        </div>
      </div>
      <div>
        <label htmlFor="description" className="text-sm font-medium mb-2 block">
          Description
        </label>
        <div>
          <textarea
            id="description"
            className="w-full mt-1 rounded-sm shadow-sm focus:ring-blue-500 focus:border-blue-500"
            rows={6}
          />
        </div>
        <button className="w-full mt-3 py-2 bg-blue-300 hover:bg-blue-500 rounded-sm shadow-sm border border-transparent text-md focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:outline-none">
          Go to Live
        </button>
      </div>
    </div>
  );
};

export default LiveCreate;
