import Navbar from "../../components/homenavbar";
import { useState, useEffect } from "react";
import Logo from "../../assets/images/dfi-logo.png";
import { FaRegEye, FaRegEyeSlash, FaSpinner } from "react-icons/fa";
import { Link } from "react-router";

const Apply = () => {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);


  const togglePassword = () => {
    setVisible(!visible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
  };
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 relative">
        <div className="relative flex max-h-screen justify-center overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300">
          <Link to="/">
            <img
              src={Logo}
              alt="logo"
              className="absolute top-8 left-8 w-[105px]"
            />
          </Link>

          <div className="mb-6 mt-4 w-[95%] md:w-[80%] lg:w-[60%] pt-24">
            <div className="text-center">
              <h4 className="text-2xl font-medium">Hello there!</h4>

              <p className="text-gray-500 text-sm">
                Welcome to Digital Fortress. Please input <br /> your details to
                apply here.
              </p>
            </div>

            <form className="my-12" onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div className="input-group">
                  <label className="text-gray-500 text-sm block">Email</label>
                  <input
                    type="email"
                    name=""
                    className="w-full mt-2 px-3 py-2.5 bg-gray-50 rounded-md text-sm border border-gray-300 focus:outline-red-500 duration-150"
                  />
                </div>

                <div className="input-group">
                  <label className="text-gray-500 text-sm block">
                    Username
                  </label>
                  <input
                    type="text"
                    name=""
                    className="w-full mt-2 px-3 py-2.5 bg-gray-50 rounded-md text-sm border border-gray-300 focus:outline-red-500 duration-150"
                  />
                </div>

                <div>
                  <div className="input-group">
                    <label className="text-gray-500 text-sm block">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type={visible ? "text" : "password"}
                        className="w-full mt-2 px-3 py-2.5 bg-gray-50 rounded-md text-sm border border-gray-300 focus:outline-red-500 duration-150"
                      />

                      <div className="icon absolute right-5 top-[45%]">
                        {visible ? (
                          <FaRegEye
                            className="text-gray-500"
                            onClick={togglePassword}
                          />
                        ) : (
                          <FaRegEyeSlash
                            className="text-gray-500"
                            onClick={togglePassword}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="px-3 py-2.5 w-full bg-red-500 rounded-md mt-2 text-white text-sm"
                >
                  {loading ? (
                    <FaSpinner className="text-white animate-spin w-5 h-5 mx-auto" />
                  ) : (
                    "Login"
                  )}
                </button>

                <p className="text-gray-500 text-center text-sm">
                  Already have an account?{" "}
                  <Link to="/auth/login" className="text-red-500 underline">
                    Login here
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>

        <div class="apply-bg hidden md:inline-block fixed right-0 h-screen w-full"></div>
      </div>
    </div>
  );
};
export default Apply;