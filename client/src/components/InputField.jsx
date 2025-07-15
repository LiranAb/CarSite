const InputField = ({ label, type, placeholder, value, onChange }) => {
    return (
        <div>
            <label className="block text-right text-sm text-gray-700">{label}</label>
            <input
                type={type}
                className="w-full border border-gray-300 rounded-xl px-4 py-2 text-right"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default InputField;
