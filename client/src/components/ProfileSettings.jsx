import { useState } from 'react';
import useAuthStore from '../store/authStore';
import axios from 'axios';
import { Button } from './Button';

const ProfileSettings = () => {
  const { user, token, updateCarName, updateName } = useAuthStore();
  const [showSettings, setShowSettings] = useState(false);
  const [name, setName] = useState(user?.name || '');
  const [carName, setCarName] = useState(user?.carName || '');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const clearMessages = () => {
    setMessage('');
    setError('');
  };

  const toggleSettings = () => {
    setShowSettings(!showSettings);
    clearMessages();
  };

  const handleSaveAll = async () => {
    clearMessages();

    try {
      let anyUpdate = false;

      if (name !== user.name) {
        const res = await updateName(name);
        if (!res.success) throw new Error(res.message);
        anyUpdate = true;
      }

      if (carName !== user.carName) {
        const res = await updateCarName(carName);
        if (!res.success) throw new Error(res.message);
        anyUpdate = true;
      }

      if (oldPassword && newPassword) {
        await axios.put(
            '/api/user/password',
            { oldPassword, newPassword },
            { headers: { Authorization: `Bearer ${token}` } }
        );
        setOldPassword('');
        setNewPassword('');
        anyUpdate = true;
      }

      if (anyUpdate) {
        setMessage('ההגדרות עודכנו בהצלחה');
      } else {
        setMessage('לא בוצעו שינויים');
      }
    } catch (err) {
      setError(err.message || 'שגיאה בעדכון ההגדרות');
    }
  };

  return (
      <div className="max-w-xl mx-auto p-4 bg-white rounded-xl">
        <Button
            onClick={toggleSettings}
            className="btn-primary mb-4"
            text={showSettings ? 'סגור הגדרות' : '⚙️ ערוך פרופיל'}
        />

        {showSettings && (
            <>
              {message && <div className="text-green-600 mb-2">{message}</div>}
              {error && <div className="text-red-600 mb-2">{error}</div>}

              <div className="mb-4">
                <label className="block mb-1 font-medium">שם מלא:</label>
                <input
                    type="text"
                    className="input-field"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label className="block mb-1 font-medium">שם רכב:</label>
                <input
                    type="text"
                    className="input-field"
                    value={carName}
                    onChange={(e) => setCarName(e.target.value)}
                />
              </div>

              <div className="mb-4">
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
              </div>

              <Button onClick={handleSaveAll} className="btn-primary mt-2 w-full" text="💾 שמור שינויים" />
            </>
        )}
      </div>
  );
};

export default ProfileSettings;
