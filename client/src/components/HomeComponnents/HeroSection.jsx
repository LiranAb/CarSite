import { Link } from 'react-router-dom';
import useAuthStore from "../../store/authStore.js";
import { Button } from "../Button.jsx";
import { FaSignInAlt } from "react-icons/fa";

const HeroSection = () => {
    const { user } = useAuthStore();

    return (
        <div className="text-center mb-20 flex flex-col items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-6 drop-shadow-sm">
                ברוך הבא ל־CarZone 🚗
            </h1>
            <p className="text-lg md:text-2xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
                פלטפורמה לניהול, שמירה ומנוע חיפוש לרכבים – הכל במקום אחד.
            </p>

            {!user && (
                <Link to="/login">
                    <Button
                        className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-full flex items-center gap-2 shadow-md hover:bg-blue-700 transition-all duration-300"
                        text={<><FaSignInAlt /> התחבר עכשיו</>}
                    />
                </Link>
            )}
        </div>
    );
};

export default HeroSection;
