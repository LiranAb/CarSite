import { create } from 'zustand';
import axios from 'axios';

const useAuthStore = create((set, get) => {
    // שליפת נתונים מה-localStorage בעת טעינה
    const savedToken = localStorage.getItem('token');
    const savedUser = localStorage.getItem('user');

    return {
        user: savedUser ? JSON.parse(savedUser) : null,
        token: savedToken || null,
        loading: false,
        error: null,

        login: async (email, password) => {
            try {
                const res = await axios.post('/api/auth/login', { email, password });

                // שמירה ב-localStorage
                localStorage.setItem('user', JSON.stringify(res.data.user));
                localStorage.setItem('token', res.data.token);

                set({ user: res.data.user, token: res.data.token, error: null });
                return { success: true };
            } catch (err) {
                const serverMsg = err.response?.data?.message;
                let message = 'שגיאה בהתחברות';
                if (serverMsg && serverMsg.toLowerCase().includes('not found')) {
                    message = 'משתמש לא קיים';
                } else if (serverMsg) {
                    message = serverMsg;
                }
                set({ error: message });
                return { success: false, message };
            }
        },

        logOut: () => {
            localStorage.removeItem('user');
            localStorage.removeItem('token');
            set({ user: null, token: null });
        },

        registerUser: async ({ name, email, password, carName }) => {
            try {
                const res = await axios.post('/api/auth/register', { name, email, password, carName });

                localStorage.setItem('user', JSON.stringify(res.data.user));
                localStorage.setItem('token', res.data.token);


                return { success: true };
            } catch (err) {
                const msg = err.response?.data?.message || 'שגיאה בהרשמה';
                set({ error: msg });
                return { success: false, message: msg };
            }
        },

        updateCarName: async (carName) => {
            const token = get().token;
            try {
                const res = await axios.put('/api/user/car', { carName }, {
                    headers: { Authorization: `Bearer ${token}` }
                });

                localStorage.setItem('user', JSON.stringify(res.data.user));
                set({ user: res.data.user, error: null });
                return { success: true };
            } catch (err) {
                const message = err.response?.data?.message || 'שגיאה בעדכון שם הרכב';
                set({ error: message });
                return { success: false, message };
            }
        },

        updateName: async (name) => {
            const token = get().token;
            try {
                const res = await axios.put('/api/user/name', { name }, {
                    headers: { Authorization: `Bearer ${token}` }
                });

                localStorage.setItem('user', JSON.stringify(res.data.user));
                set({ user: res.data.user });
                return { success: true, message: res.data.message };
            } catch (err) {
                const message = err.response?.data?.message || 'שגיאה בעדכון השם';
                set({ error: message });
                return { success: false, message };
            }
        },

        getAllUsersWithCars: async () => {
            const token = get().token;
            try {
                const res = await axios.get('/api/user/all-users', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                return { success: true, users: res.data };
            } catch (err) {
                const message = err.response?.data?.message || 'שגיאה בשליפת המשתמשים';
                return { success: false, message };
            }
        }
    };
});

export default useAuthStore;
