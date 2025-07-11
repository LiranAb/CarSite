import { create } from 'zustand';
import axios from 'axios';

const useAuthStore = create((set, get) => ({
    user: null,
    token: null,
    loading: false,
    error: null,

    login: async (email, password) => {
        try {
            const res = await axios.post('/api/auth/login', { email, password });
            set({ user: res.data.user, token: res.data.token, error: null });
            return { success: true };
        } catch (err) {
            set({ error: err.response?.data?.message || 'שגיאה בהתחברות' });
            return { success: false, message: err.response?.data?.message || 'שגיאה בהתחברות' };
        }
    },

    logOut: () => {
        set({ user: null, token: null });
    },

    registerUser: async ({ name, email, password, carName }) => {
        try {
            const res = await axios.post('/api/auth/register', { name, email, password, carName });
            set({ user: res.data.user, token: res.data.token, error: null });
            return { success: true };
        } catch (err) {
            set({ error: err.response?.data?.message || 'שגיאה בהרשמה' });
            return { success: false, message: err.response?.data?.message || 'שגיאה בהרשמה' };
        }
    },

    updateCarName: async (carName) => {
        const token = get().token;
        try {
            const res = await axios.put('/api/user/car', { carName }, {
                headers: { Authorization: `Bearer ${token}` }
            });
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
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return { success: true, users: res.data };
        } catch (err) {
            const message = err.response?.data?.message || 'שגיאה בשליפת המשתמשים';
            return { success: false, message };
        }
    }

}));

export default useAuthStore;
