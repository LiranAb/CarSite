import { FaLock } from "react-icons/fa";
import LoginForm from "../components/LoginRegisterForms/LoginForm";
import carLogo from "../assets/car-logo.svg"; // ודא שהלוגו נמצא בתיקיית assets

const Login = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 px-4 py-12">
            <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-md transition-all duration-300">

                {/* לוגו למעלה */}
                <div className="flex justify-center mb-6">
                    <img src={carLogo} alt="CarZone Logo" className="w-16 h-16" />
                </div>

                {/* כותרת עם מנעול */}
                <h2 className="text-3xl font-extrabold text-center text-blue-700 mb-2 tracking-tight flex items-center justify-center gap-2">
                    <FaLock className="text-blue-500" />
                    התחברות ל־CarZone
                </h2>

                <p className="text-center text-gray-500 mb-8">
                    הזן את פרטיך כדי להתחבר לחשבון שלך
                </p>

                <LoginForm />
            </div>
        </div>
    );
};

export default Login;
