import Navbar from "../../components/homenavbar";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { authSignup } from "../../services/auth";
// Assets
import Logo from "../../assets/images/dfi-logo.png";
import { FaSpinner, FaGoogle } from "react-icons/fa";
import { Link } from "react-router";
import InputField from "../../components/elements/InputField";
import PasswordField from "../../components/elements/PasswordField";

const Apply = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
        toast.error("Passwords do not match");
        return;
    }

    setLoading(true);

    try {
        const data = await authSignup(email, phoneNumber, username, password, confirmPassword);

        // Ensure API response contains access token and user ID
        if (data && data.access && data.user) {
            localStorage.setItem("accessToken", data.access);
            localStorage.setItem("userId", data.user.id);
            toast.success("Registration successful");
            navigate("/dashboard");
        } else {
            throw new Error("Invalid API response");
        }
    } catch (error) {
        toast.error(error.message || "Registration failed");
    } finally {
        setLoading(false);
    }
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

            <form className="my-12 pb-6" onSubmit={handleSubmit}>
              <div className="space-y-4">
                <InputField
                  label="Email"
                  type="email"
                  value={email}
                  onChange={setEmail}
                />
                <InputField
                  label="Username"
                  type="text"
                  value={username}
                  onChange={setUsername}
                />
                <InputField
                  label="Phone Number"
                  type="text"
                  value={phoneNumber}
                  onChange={setPhoneNumber}
                />

                <PasswordField
                  label="Password"
                  value={password}
                  onChange={setPassword}
                />
                <PasswordField
                  label="Confirm Password"
                  value={confirmPassword}
                  onChange={setConfirmPassword}
                />

                <button
                  type="submit"
                  className="px-3 py-2.5 w-full bg-red-500 rounded-md mt-2 text-white text-sm"
                >
                  {loading ? (
                    <FaSpinner className="text-white animate-spin w-5 h-5 mx-auto" />
                  ) : (
                    "Apply"
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

        <div className="apply-bg hidden md:inline-block fixed right-0 h-screen w-full"></div>
      </div>
    </div>
  );
};

export default Apply;