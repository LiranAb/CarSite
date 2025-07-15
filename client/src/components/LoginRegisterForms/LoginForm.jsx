import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import  useAuthStore  from '../../store/authStore';
import { Button } from '../Button';
import InputField from '../InputField';

const LoginForm = () => {
    const { login } = useAuthStore();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

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
            setError('שם משתמש או סיסמה שגויים');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <InputField
                label="אימייל"
                type="email"
                placeholder="הכנס אימייל"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <InputField
                label="סיסמה"
                type="password"
                placeholder="הכנס סיסמה"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            {error && <p className="text-red-600 text-sm text-right">{error}</p>}

            <Button
                type="submit"
                className="w-full bg-blue-600 text-white rounded-xl px-4 py-3 hover:bg-blue-700 transition duration-200"
                text="התחבר"
            />
        </form>
    );
};

export default LoginForm;
