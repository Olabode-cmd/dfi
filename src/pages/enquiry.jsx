import { useState } from "react";
import EnquiryImg from "../assets/images/undraw-enquiry.svg";
import { FaSpinner } from "react-icons/fa";

const Enquiry = () => {
    const [loading, setLoading] = useState(false);
  return (
    <div>
      <div className="pt-56 pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-3 md:px-8">
          <h1 className="text-3xl md:text-5xl font-medium mb-3">Enquiry</h1>
          <p className="text-gray-700 font-normal text-sm md:text-base">
            We're here to assist you. Send us your enquiry, and we'll get back{" "}
            <br className="hidden md:block" />
            to you as soon as possible.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
        <div>
          <img
            src={EnquiryImg}
            alt=""
            className="hidden md:inline-block w-[85%] xl:w-[75%]"
          />
        </div>

        <form className="px-3 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-4 py-16">
          <div className="input-group">
            <label className="text-gray-500 text-sm block">Your name</label>
            <input
              type="text"
              className="w-full mt-2 px-3 py-2.5 bg-gray-50 rounded-md text-sm border border-gray-300 focus:outline-red-500 duration-150"
            />
          </div>

          <div className="input-group">
            <label className="text-gray-500 text-sm block">Email address</label>
            <input
              type="email"
              className="w-full mt-2 px-3 py-2.5 bg-gray-50 rounded-md text-sm border border-gray-300 focus:outline-red-500 duration-150"
            />
          </div>

          <div className="input-group">
            <label className="text-gray-500 text-sm block">Phone number</label>
            <input
              type="text"
              className="w-full mt-2 px-3 py-2.5 bg-gray-50 rounded-md text-sm border border-gray-300 focus:outline-red-500 duration-150"
            />
          </div>

          <div className="input-group">
            <label className="text-gray-500 text-sm block">Branches</label>
            <select className="w-full mt-2 px-3 py-2.5 bg-gray-50 rounded-md text-sm border border-gray-300 focus:outline-red-500 duration-150">
              <option value="1">Akowonjo, Dopemu</option>
              <option value="2">Anthony Village</option>
            </select>
          </div>

          <div className="input-group col-span-2">
            <label className="text-gray-500 text-sm block">
              Course of interest
            </label>
            <input
              type="text"
              className="w-full mt-2 px-3 py-2.5 bg-gray-50 rounded-md text-sm border border-gray-300 focus:outline-red-500 duration-150"
            />
          </div>

          <div className="input-group col-span-2">
            <label className="text-gray-500 text-sm block">
              Message us (optional)
            </label>
            <textarea className="w-full resize-none h-[160px] mt-2 px-3 py-2.5 bg-gray-50 rounded-md text-sm border border-gray-300 focus:outline-red-500 duration-150" />
          </div>

          <button
            type="submit"
            className="px-3 py-2.5 w-full bg-red-500 rounded-md mt-2 text-white text-sm col-span-2"
          >
            {loading ? (
              <FaSpinner className="text-white animate-spin w-5 h-5 mx-auto" />
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Enquiry;
