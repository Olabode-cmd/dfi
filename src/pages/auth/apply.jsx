import Navbar from "../../components/homenavbar";
import { useState, useEffect } from "react";
import { registerUser } from "../../services/auth";
// import { useAuth } from "../../context/authContext";
import { toast } from "react-toastify";

// Assets
import Logo from "../../assets/images/dfi-logo.png";
import { FaRegEye, FaRegEyeSlash, FaSpinner, FaGoogle } from "react-icons/fa";
import { Link } from "react-router";

const Apply = () => {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const togglePassword = () => setVisible(!visible);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // const formData = {
    //   email: email,
    //   username: username,
    //   password: password,
    //   phone_number: phoneNumber,
    // }
    // console.log(formData)

    try {
      const response = await fetch(
        `${api}/user/v1/register/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      console.log("Response Status:", response.status);

      let data;
      try {
        data = await response.json();
      } catch (jsonError) {
        throw new Error("Invalid JSON response from server");
      }

      if (!response.ok) {
        console.error("Server Error:", data);
        toast.error(data?.message || "Registration failed. Please try again.");
        return;
      }

      if (!data?.access || !data?.user?.id) {
        throw new Error("Incomplete response data. Missing token or user ID.");
      }

      localStorage.setItem("accessToken", data.access);
      localStorage.setItem("userId", data.user.id);

      toast.success("Registration successful");
    } catch (error) {
      console.error("Fetch Error:", error);
      toast.error(`Error: ${error.message}`);
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
                  visible={visible}
                  togglePassword={togglePassword}
                />
                <PasswordField
                  label="Confirm Password"
                  value={confirmPassword}
                  onChange={setConfirmPassword}
                  visible={visible}
                  togglePassword={togglePassword}
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

const InputField = ({ label, type, value, onChange }) => (
  <div className="input-group">
    <label className="text-gray-500 text-sm block">{label}</label>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full mt-2 px-3 py-2.5 bg-gray-50 rounded-md text-sm border border-gray-300 focus:outline-red-500 duration-150"
    />
  </div>
);

const PasswordField = ({ label, value, onChange, visible, togglePassword }) => (
  <div className="input-group">
    <label className="text-gray-500 text-sm block">{label}</label>
    <div className="relative">
      <input
        type={visible ? "text" : "password"}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full mt-2 px-3 py-2.5 bg-gray-50 rounded-md text-sm border border-gray-300 focus:outline-red-500 duration-150"
      />
      <div
        className="icon absolute right-5 top-[45%] cursor-pointer"
        onClick={togglePassword}
      >
        {visible ? (
          <FaRegEye className="text-gray-500" />
        ) : (
          <FaRegEyeSlash className="text-gray-500" />
        )}
      </div>
    </div>
  </div>
);

export default Apply;