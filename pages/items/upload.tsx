import { NextPage } from "next";

const Upload: NextPage = () => {
  return (
    <div className="px-3 py-4">
      <div>
        <label className="w-full h-48 flex justify-center items-center border-2 border-dashed border-white rounded-sm hover:border-blue-500">
          <svg
            className="h-12 w-12"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            <path
              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <input className="hidden" type="file" />
        </label>
      </div>
      <div className="my-3">
        <label className="mb-1 block text-sm font-medium" htmlFor="price">
          Price
        </label>
        <div className="flex items-center shadow-sm rounded-sm relative">
          <div className="absolute left-0 flex justify-center items-center pl-2 pointer-events-none">
            <span className="text-sm text-black">$</span>
          </div>
          <input
            id="price"
            type="text"
            placeholder="0.00"
            className="w-full px-3 pl-6 py-2 border text-gray-300 border-white rounded-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          <div className="absolute right-0 flex items-center pr-2 pointer-events-none">
            <span>USD</span>
          </div>
        </div>
      </div>
      <div>
        <label htmlFor="description" className="mb-1 block text-sm font-medium">
          Description
        </label>
        <div>
          <textarea
            id="description"
            className="w-full mt-1 rounded-sm shadow-sm focus:ring-blue-500 focus:border-blue-500"
            rows={6}
          />
        </div>
      </div>
      <button className="w-full mt-3 py-2 bg-blue-300 hover:bg-blue-500 rounded-sm shadow-sm border border-transparent text-md focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:outline-none">
        Upload Item
      </button>
    </div>
  );
};

export default Upload;
