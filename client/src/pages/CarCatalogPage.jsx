// ✅ src/pages/CarCatalogPage.jsx

import { useEffect, useState } from 'react';
import FilterSidebar from '../components/CarSearch/FilterSidebar';
import CarModelGrid from '../components/CarSearch/CarModelGrid';
import { useCarZoneStore } from '../store/useCarZoneStore';
import  {getModelsByMakeAndYear}  from '../hooks/useCarQueryApi.js';

const CarCatalogPage = () => {
    const {
        carModels,
        setCarModels,
        isLoading,
        setLoading,
        error,
        setError,
    } = useCarZoneStore();

    const [filters, setFilters] = useState({
        make: '',
        year: '',
        model: ''
    });

    const [selectedMake, setSelectedMake] = useState('');
    const [selectedYear, setSelectedYear] = useState('');
    const [subModel, setSubModel] = useState('');

    useEffect(() => {
        if (selectedMake && selectedYear) {
            setLoading(true);
            getModelsByMakeAndYear(selectedMake, selectedYear)
                .then((models) => {
                    console.log(carModels);
                    setCarModels(models);
                    setLoading(false);
                })
                .catch((err) => {
                    setError('שגיאה בשליפת דגמים');
                    console.error(err);
                    setLoading(false);
                });
        } else {
            setCarModels([]);
        }
    }, [selectedMake, selectedYear]);

    const handleSearch = (e) => {
        e.preventDefault();
        setSelectedMake(filters.make);
        setSelectedYear(filters.year);
        setSubModel(filters.model);
    };

    const filteredModels = carModels.filter((m) => {
        return subModel.trim()
            ? (m.model_name || '').toLowerCase().includes(subModel.toLowerCase())
            : true;
    });

    return (
        <div className="flex max-w-7xl mx-auto px-6 py-10 gap-6">
            <FilterSidebar
                filters={filters}
                setFilters={setFilters}
                handleSearch={handleSearch}
            />

            <div className="flex-1">
                <h1 className="text-3xl font-bold text-blue-800 mb-6 text-center">קטלוג רכבים</h1>
                {isLoading && <p className="text-center text-gray-500">טוען רכבים...</p>}
                {error && <p className="text-center text-red-500">{error}</p>}
                {!isLoading && !error && filteredModels.length === 0 && (
                    <p className="text-center text-gray-400">לא נמצאו רכבים</p>
                )}
                <CarModelGrid models={filteredModels} />
            </div>
        </div>
    );
};

export default CarCatalogPage;
