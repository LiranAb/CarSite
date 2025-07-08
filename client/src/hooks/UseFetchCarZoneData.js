import { useEffect } from 'react';
import { useCarZoneStore } from '../store/useCarZoneStore.js';

const useFetchCarZoneData = (make = 'honda') => {
    const { setCarModels, setIsLoading, setError } = useCarZoneStore();

    useEffect(() => {
        const fetchModels = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMake/${make}?format=json`);
                const data = await response.json();
                setCarModels(data.Results || []);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchModels();
    }, [make]);
};

export default useFetchCarZoneData;
