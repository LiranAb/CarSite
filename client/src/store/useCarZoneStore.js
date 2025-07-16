import { create } from 'zustand';


export const useCarZoneStore = create((set) => ({
    carModels: [],
    isLoading: false,
    error: null,

    setCarModels: (models) => set({ carModels: models }),
    setLoading: (loading) => set({ isLoading: loading }), // 👈 תיקון כאן
    setError: (err) => set({ error: err }),
}));
