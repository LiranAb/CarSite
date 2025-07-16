// ✅ src/components/CarSearch/FilterSidebar.jsx
import { useEffect, useState } from 'react';
import {
    getAllMakes,
    getModelsByMakeAndYear,
    getYearsRange
} from '../../hooks/useCarQueryApi';

const FilterSidebar = ({ filters, setFilters, handleSearch }) => {
    const [makes, setMakes] = useState([]);
    const [years, setYears] = useState([]);
    const [models, setModels] = useState([]);

    useEffect(() => {
        getAllMakes().then(setMakes);
        getYearsRange().then((res) => {
            if (res.min_year && res.max_year) {
                const range = [];
                for (let y = +res.max_year; y >= +res.min_year; y--) range.push(y);
                setYears(range);
            }
        });
    }, []);

    useEffect(() => {
        if (filters.make && filters.year) {
            getModelsByMakeAndYear(filters.make, filters.year).then(setModels);
        }
    }, [filters.make, filters.year]);

    return (
        <form
            onSubmit={handleSearch}
            className="w-64 bg-white rounded-xl shadow p-4 h-fit sticky top-20 border border-gray-200"
        >
            <h2 className="text-xl font-semibold mb-4 text-gray-700">סינון רכבים</h2>

            {/* יצרן */}
            <div className="mb-6">
                <label className="block mb-1 text-sm font-medium">יצרן</label>
                <select
                    value={filters.make}
                    onChange={(e) => setFilters((prev) => ({ ...prev, make: e.target.value }))}
                    className="w-full border border-gray-300 rounded px-2 py-1"
                >
                    <option value="">בחר יצרן</option>
                    {makes.map((m, i) => (
                        <option key={i} value={m.make_display}>{m.make_display}</option>
                    ))}
                </select>
            </div>

            {/* שנה */}
            <div className="mb-6">
                <label className="block mb-1 text-sm font-medium">שנה</label>
                <select
                    value={filters.year}
                    onChange={(e) => setFilters((prev) => ({ ...prev, year: e.target.value }))}
                    className="w-full border border-gray-300 rounded px-2 py-1"
                >
                    <option value="">בחר שנה</option>
                    {years.map((y) => (
                        <option key={y} value={y}>{y}</option>
                    ))}
                </select>
            </div>

            {/* דגם */}
            <div className="mb-6">
                <label className="block mb-1 text-sm font-medium">דגם</label>
                <select
                    value={filters.model}
                    onChange={(e) => setFilters((prev) => ({ ...prev, model: e.target.value }))}
                    className="w-full border border-gray-300 rounded px-2 py-1"
                >
                    <option value="">בחר דגם</option>
                    {models.map((m, i) => (
                        <option key={i} value={m.model_name}>{m.model_name}</option>
                    ))}
                </select>
            </div>

            <button
                type="submit"
                className="w-full bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700 transition"
            >
                חפש
            </button>
        </form>
    );
};

export default FilterSidebar;
