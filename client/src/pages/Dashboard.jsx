import React from 'react'
import  useAuthStore  from '../store/authStore'
import ProfileSettings from "../components/ProfileSettings";


const Dashboard = () => {
  return (
    <div className="card">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">
          לוח בקרה
        </h1>

          </div>
          
          {user && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">
                שלום {user.name}!
              </h2>
              <p className="text-gray-600">
                ברוך הבא לעמוד הפרופיל שלך. כאן תוכל\י לנהל את החשבון שלך ולבצע פעולות נוספות.
              </p>
            </div>
          )}
            
            <div className="card">

                  <ProfileSettings/>
            </div>

    </div>
  )
}

export default Dashboard