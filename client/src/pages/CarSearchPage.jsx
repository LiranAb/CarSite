import { useState, useEffect } from 'react';
import CarSearchForm from '../components/CarSearch/CarSearchForm';
import CarModelGrid from '../components/CarSearch/CarModelGrid';
import fetchCarZoneData from '../hooks/UseFetchCarZoneData';
import { useCarZoneStore } from '../store/useCarZoneStore';

const CarSearchPage = () => {
    const [makeInput, setMakeInput] = useState('');
    const [subModel, setSubModel] = useState('');
    const [make, setMake] = useState('');
    const { carModels, isLoading, error, setCarModels, setIsLoading, setError } = useCarZoneStore();


    useEffect(() => {
        if (make) {
            fetchCarZoneData(make, setCarModels, setIsLoading, setError);
            setMakeInput('');
            // איפוס רק אחרי ש־make קיבל ערך וה־fetch בוצע
        }
    }, [make]);


    const handleSearch = (e) => {
        if (e) e.preventDefault();
        if (!makeInput.trim()) return;
        setMake(makeInput.trim()); // אל תאפס כאן!
    };
    const filteredModels = Array.isArray(carModels)
        ? subModel.trim()
            ? carModels.filter((m) =>
                (m.Model_Name || '').toLowerCase().includes(subModel.trim().toLowerCase())
            )
            : carModels
        : [];

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h2 className="text-2xl font-bold mb-4 text-center">חיפוש רכבים</h2>

            <CarSearchForm
                makeInput={makeInput}
                setMakeInput={setMakeInput}
                subModel={subModel}
                setSubModel={setSubModel}
                handleSearch={handleSearch}
            />

            {isLoading && <p className="text-center text-gray-600 mt-4">בטעינה...</p>}
            {error && <p className="text-center text-red-500 mt-4">{error}</p>}
            {!isLoading && !error && filteredModels.length === 0 && (
                <p className="text-center text-gray-500 mt-4">לא נמצאו דגמים תואמים</p>
            )}

            <CarModelGrid models={filteredModels} />
        </div>
    );
};

export default CarSearchPage;
