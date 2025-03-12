import { useState } from "react";
import Logo from "../../assets/images/dfi-logo.png";
import { FaSpinner } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router";
import { useAuth } from "../../context/AuthContext";
import { loginUser } from "../../services/auth";
import { toast } from "react-toastify";

import InputField from "../../components/elements/inputfield";
import PasswordField from "../../components/elements/passwordfield";

const Login = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = await loginUser({ email, password });

      // Store token & user ID in localStorage
      localStorage.setItem("accessToken", data.access);
      localStorage.setItem("userId", data.user.id);

      toast.success("Login successful!");

      // Get the redirect path or default to dashboard
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
                <InputField
                  label="Email"
                  type="email"
                  value={email}
                  onChange={setEmail}
                />

                <PasswordField
                  label="Password"
                  value={password}
                  onChange={setPassword}
                />

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
