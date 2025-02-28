import Navbar from "../../components/homenavbar";
import { useState, useEffect } from "react";
import Logo from "../../assets/images/dfi-logo.png";
import { FaRegEye, FaRegEyeSlash, FaSpinner, FaGoogle } from "react-icons/fa";
import { Link } from "react-router";

const Login = () => {
  const [visible, setVisible] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  const togglePassword = () => {
    setVisible(!visible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
  }
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative flex items-center justify-center">
          <Link to='/'>
            <img
              src={Logo}
              alt="logo"
              className="absolute top-8 left-8 w-[105px]"
            />
          </Link>

          <div className="mb-6 mt-4 w-[95%] md:w-[80%] lg:w-[60%] pt-24 md:pt-0">
            <div className="text-center">
              <h4 className="text-2xl font-medium">Welcome back!</h4>

              <p className="text-gray-500 text-sm">
                Kindly fill in your details to login
              </p>
            </div>

            <form className="mt-12" onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div className="input-group">
                  <label className="text-gray-500 text-sm block">
                    Email or username
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

                  <div className="flex items-center justify-between mt-3">
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleChange}
                        className="hidden"
                      />
                      <span
                        className={`w-4 h-4 border-2 border-gray-300 rounded-sm flex items-center justify-center ${
                          isChecked ? "bg-red-500 border-red-500" : "bg-white"
                        }`}
                      >
                        {isChecked && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="white"
                            className="w-4 h-4"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </span>
                      <span className="ml-2 text-sm text-gray-700">
                        Remember me
                      </span>
                    </label>

                    <Link
                      to="/"
                      className="text-sm text-gray-500 hover:text-red-500 duration-150"
                    >
                      Forgot password?
                    </Link>
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
                  Don't have an account?{" "}
                  <Link to="/auth/apply" className="text-red-500 underline">
                    Apply here
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>

        <div className="login-bg hidden md:inline-block"></div>
      </div>
    </div>
  );
};
export default Login;
