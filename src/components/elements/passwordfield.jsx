import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const PasswordField = ({ label, value, onChange }) => {
    const [visible, setVisible] = useState(false);
    const togglePassword = () => setVisible(!visible);

    return (
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
              <div className="flex items-center space-x-1">
                <p className="text-xs text-gray-500">hide</p>
                <FaRegEyeSlash className="text-gray-500" />
              </div>
            ) : (
              <div className="flex items-center space-x-1">
                <p className="text-xs text-gray-500">show</p>
                <FaRegEye className="text-gray-500" />
              </div>
            )}
          </div>
        </div>
      </div>
    );
};


export default PasswordField;