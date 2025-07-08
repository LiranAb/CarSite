



export const Button = ({ text, onClick, className = '', type = 'button' }) => {
    return (
        <button
            onClick={onClick}
            className={`bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition ${className}`}
            type={type}
        >
            {text}
        </button>
    );
}