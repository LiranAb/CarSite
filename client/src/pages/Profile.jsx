import React from 'react';
import useAuthStore from '../store/authStore';
import ProfileSettings from "../components/ProfileSettings";
import { FaUserCircle } from 'react-icons/fa';

const Profile = () => {
  const { user } = useAuthStore();

  return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-12 px-4 flex justify-center items-start">
        <div className="bg-white shadow-2xl rounded-3xl w-full max-w-3xl p-8 transition-all duration-300 border border-gray-200">

          {/* כותרת ראשית */}
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-blue-800 flex items-center gap-2">
              <FaUserCircle className="text-blue-500 text-4xl" />
              לוח בקרה
            </h1>
          </div>

          {/* מידע על המשתמש */}
          {user && (
              <div className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">שלום {user.name} 👋</h2>
                <p className="text-gray-600 text-base">
                  ברוך הבא לעמוד הפרופיל שלך. כאן תוכל לנהל את החשבון, לעדכן פרטים ולבצע פעולות נוספות.
                </p>
              </div>
          )}

          {/* הגדרות פרופיל */}
          <div>
            <ProfileSettings />
          </div>
        </div>
      </div>
  );
};

export default Profile;
