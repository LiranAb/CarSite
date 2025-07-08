import { useState } from 'react';
import useAuthStore from '../store/authStore';
import axios from 'axios';
import { Button } from './Button';

const ProfileSettings = () => {
  const { user, token } = useAuthStore();
  const [showSettings, setShowSettings] = useState(false);
  const [name, setName] = useState(user?.name || '');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const toggleSettings = () => {
    setShowSettings(!showSettings);
    setMessage('');
    setError('');
  };

  const handleNameChange = async () => {
    try {
      const  response= await axios.put(
          '/api/user/name',
          { name },
          { headers: { Authorization: `Bearer ${token}` } }
      );
      setMessage('השם עודכן בהצלחה');
      setError('');
    } catch (err) {
      setError(err.response?.data?.message || 'שגיאה בעדכון השם');
    }
  };

  const handlePasswordChange = async () => {
    try {
      const res = await axios.put(
          '/api/user/password',
          { oldPassword, newPassword },
          { headers: { Authorization: `Bearer ${token}` } }
      );
      setMessage('הסיסמה עודכנה בהצלחה');
      setError('');
      setOldPassword('');
      setNewPassword('');
    } catch (err) {
      setError(err.response?.data?.message || 'שגיאה בעדכון הסיסמה');
    }
  };

  return (
      <div className="max-w-xl mx-auto p-4 shadow-md bg-white rounded-xl">
        <Button
            onClick={toggleSettings}
            className="btn-primary mb-4"
            text={showSettings ? 'סגור הגדרות' : '⚙️ ערוך פרופיל'}
        >
          {showSettings ? 'סגור הגדרות' : '⚙️ ערוך פרופיל'}
        </Button>

        {showSettings && (
            <>
              {message && <div className="text-green-600 mb-2">{message}</div>}
              {error && <div className="text-red-600 mb-2">{error}</div>}

              <div className="mb-6">
                <label className="block mb-1 font-medium">שם מלא:</label>
                <input
                    type="text"
                    className="input-field"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <Button onClick={handleNameChange} className="btn-primary mt-2"
                text={"עדכן שם"}

                >עדכן שם</Button>
              </div>

              <div className="mb-6">
                <label className="block mb-1 font-medium">סיסמה נוכחית:</label>
                <input
                    type="password"
                    className="input-field"
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                />
                <label className="block mt-3 mb-1 font-medium">סיסמה חדשה:</label>
                <input
                    type="password"
                    className="input-field"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                />
                <Button onClick={handlePasswordChange} className="btn-primary mt-2"
                text={"עדכן סיסמה"}
                >עדכן סיסמה</Button>
              </div>
            </>
        )}
      </div>
  );
};

export default ProfileSettings;
