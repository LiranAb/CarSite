import React, { useState } from 'react';
import useFetchCarZoneData from '../hooks/useFetchCarZoneData';
import { useCarZoneStore } from '../store/useCarZoneStore';
import CarModelCard from '../Cards/CarModelCard';

const CarSearchPage = () => {
    const [make, setMake] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const { carModels, isLoading, error } = useCarZoneStore();

    const handleSearch = (e) => {
        e.preventDefault();
        setMake(searchTerm.trim());
    };

    useFetchCarZoneData(make);

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-center mb-6">🔍 חיפוש דגמי רכבים לפי יצרן</h1>

            <form onSubmit={handleSearch} className="flex justify-center gap-4 mb-6">
                <input
                    type="text"
                    placeholder="לדוגמה: honda, toyota..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="input-field w-60"
                />
                <button type="submit" className="btn-primary">חפש</button>
            </form>

            {isLoading && <p className="text-center">טוען נתונים...</p>}
            {error && <p className="text-center text-red-500">{error}</p>}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {carModels.map((model) => (
                    <CarModelCard key={model.Model_ID} model={model} />
                ))}
            </div>
        </div>
    );
};

export default CarSearchPage;
