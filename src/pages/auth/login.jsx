import { useState } from "react";
import Logo from "../../assets/images/dfi-logo.png";
import { FaSpinner } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { authLogin } from "../../services/auth";
import { toast } from "react-toastify";

const Login = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = await authLogin(email, password);

      localStorage.setItem("accessToken", data.access);
      localStorage.setItem("userId", data.user.id);

      toast.success("Login successful!");

      const from = location.state?.from || "/dashboard";
      navigate(from, { replace: true });
    } catch (error) {
      toast.error(error.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative flex items-center justify-center">
          <Link to="/">
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
                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                    required
                  />
                </div>

                {/* Password Input */}
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="px-3 py-2.5 w-full bg-red-500 rounded-md mt-2 text-white text-sm"
                  disabled={loading}
                >
                  {loading ? (
                    <FaSpinner className="text-white animate-spin w-5 h-5 mx-auto" />
                  ) : (
                    "Login"
                  )}
                </button>

                {/* Signup Link */}
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
