import { create } from 'zustand';
import axios from 'axios';

const useAuthStore = create((set) => ({
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
    }
    ,


    logout: () => {
        set({ user: null, token: null });
    },
    // בתוך authStore.js
    register: async ({ name, email, password }) => {
        try {
            const res = await axios.post('/api/auth/register', { name, email, password });
            set({ user: res.data.user, token: res.data.token, error: null });
            return { success: true };
        } catch (err) {
            set({ error: err.response?.data?.message || 'שגיאה בהרשמה' });
            console.log(err.response?.data?.message);
            return { success: false, message: err.response?.data?.message || 'שגיאה בהרשמה' };
        }
    },

}));

export default useAuthStore;
