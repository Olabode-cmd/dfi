import React from 'react'
import { FaSpinner } from 'react-icons/fa';
import { useState } from 'react';

const VerifyCertificates = () => {
    const [loading, setLoading] = useState(false);
    return (
      <>
        <div className="verify-bg py-24 md:py-40 px-3 md:px-8">
          <h1 className="text-white text-3xl md:text-5xl text-left: md:text-center font-medium">
            Verification Portal
          </h1>
        </div>

        <div className="my-16 mx-auto px-6 py-5 w-[97%] md:w-[45%] 2xl:w-[40%] border border-gray-300 rounded-md">
          <h3 className="text-slate-900 text-md md:text-lg text-center mb-6">
            Enter certificate code to proceed
          </h3>

          <form>
            <div className="input-group text-center">
              <input
                type="text"
                placeholder="Code"
                className="w-full md:w-[80%] inline mt-2 px-3 py-2.5 bg-gray-50 rounded-md text-sm border border-gray-300 focus:outline-red-500 duration-150"
              />

              <button
                type="submit"
                className="px-3 py-2.5 w-full md:w-[80%] bg-red-500 rounded-md mt-2 text-white text-sm"
              >
                {loading ? (
                  <FaSpinner className="text-white animate-spin w-5 h-5 mx-auto" />
                ) : (
                  "Verify"
                )}
              </button>
            </div>
          </form>
        </div>
      </>
    );
}

export default VerifyCertificates;