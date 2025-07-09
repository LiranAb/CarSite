import { Link } from 'react-router-dom';
import useAuthStore from "../store/authStore";
import {Button} from "../components/Button";


const Home = () => {
    const {user}=useAuthStore();
    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
            {/* Hero Section */}
            <div className="text-center mb-32 flex flex-col items-center">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
                    ברוך הבא ל־CarZone 🚗
                </h1>
                <p className="text-lg md:text-xl text-gray-600 max-w-xl mx-auto ">
                    פלטפורמה לניהול, שמירת והשוואת רכבים בצורה פשוטה, חכמה ונוחה
                </p>
                {!user && (
                <Link to="/login">
                    <Button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
                    text="התחבר עכשיו" />



                </Link>)}
            </div>

            {/* Features */}
            <p className="w-full max-w-2xl text-right">
                <h2 className="text-2xl font-semibold mb-4 text-gray-700">✨ מה אפשר לעשות באתר?</h2>
                <ul className="list-disc pr-6 text-gray-600 space-y-2">
                    <li>ניהול רשימת רכבים אישית</li>
                    <li>הוספה ועריכה של פרטי רכב</li>
                    <li>התחברות והרשמה מאובטחות עם JWT</li>
                    <li>צפייה ברכבים של משתמשים אחרים</li>
                </ul>
            </p>
        </div>
    );
};

export default Home;
