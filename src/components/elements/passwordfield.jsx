import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const PasswordField = ({ label, value = "", onChange }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="input-group">
      {label && <label className="text-gray-500 text-sm block">{label}</label>}

      <div className="relative">
        <input
          type={visible ? "text" : "password"}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full mt-2 px-3 py-2.5 bg-gray-50 rounded-md text-sm border border-gray-300 focus:outline-red-500 duration-150"
        />

        <button
          type="button"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-1 text-gray-500 text-xs"
          onClick={() => setVisible(!visible)}
        >
          <span>{visible ? "Hide" : "Show"}</span>
          {visible ? <FaRegEyeSlash /> : <FaRegEye />}
        </button>
      </div>
    </div>
  );
};

export default PasswordField;
