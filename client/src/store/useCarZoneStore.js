import { create } from 'zustand';

export const useCarZoneStore = create((set) => ({
    carModels: [],
    isLoading: false,
    error: null,

    setCarModels: (models) => set({ carModels: models }),
    setIsLoading: (loading) => set({ isLoading: loading }),
    setError: (err) => set({ error: err }),
}));
