import React from 'react';

const RegisterForm = ({ formData, handleChange, loading }) => (
    <>
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">שם מלא</label>
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="input-field"
                placeholder="הכנס את השם המלא שלך"
                required
                disabled={loading}
            />
        </div>
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">אימייל</label>
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="input-field"
                placeholder="הכנס את האימייל שלך"
                required={true}
                disabled={loading}
            />
        </div>
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">סיסמה</label>
            <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="input-field"
                placeholder="הכנס סיסמה"
                required={true}
                disabled={loading}
            />
        </div>
        <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">אימות סיסמה</label>
            <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="input-field"
                placeholder="הכנס את הסיסמה שוב"
                required={true}
                disabled={loading}
            />
        </div>
        <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">שם הרכב שלך</label>
            <input
                type="text"
                name="carName"
                value={formData.carName}
                onChange={handleChange}
                className="input-field"
                placeholder="שם הרכב שלך"
                required={true}
                disabled={loading}
            />
        </div>
    </>
);

export default RegisterForm;