import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../store/authStore';
import {Button} from '../components/Button'; // נניח שיש לך קומפוננטת כפתור

const login = () => {
    const { login } = useAuthStore();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // ולידציה בסיסית
        if (!email || !password) {
            return setError('אנא מלא את כל השדות');
        }
        if (!email.includes('@')) {
            return setError('אימייל לא תקין');
        }

        const result = await login(email, password);
        if (result.success) {
            navigate('/');
        } else {
            setError(result.message);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">התחברות</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-right text-sm text-gray-700">אימייל</label>
                        <input
                            type="email"
                            className="w-full border border-gray-300 rounded-xl px-4 py-2 text-right"
                            placeholder="הכנס אימייל"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="block text-right text-sm text-gray-700">סיסמה</label>
                        <input
                            type="password"
                            className="w-full border border-gray-300 rounded-xl px-4 py-2 text-right"
                            placeholder="הכנס סיסמה"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    {error && <p className="text-red-600 text-sm text-right">{error}</p>}

                    <Button
                    type={"submit"}
                    className="w-full bg-blue-600 text-white rounded-xl px-4 py-3 hover:bg-blue-700 transition duration-200"
                    onClick={handleSubmit}
                    text="התחבר"
                    />
                </form>
            </div>
        </div>
    );
};

export default login;
