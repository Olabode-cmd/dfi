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

export default InputField;