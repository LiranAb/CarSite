import React from 'react';
import CarsImageComponnent from "../components/CarSearch/CarsImageComponnent.jsx";

const CarModelCard = ({ model }) => {
    if (!model) return null;

    const {
        model_name,
        model_make_id,
        model_year,
        model_body,
        model_trim,

    } = model;

    return (
        <div className="bg-white shadow rounded p-4 text-center">
            <CarsImageComponnent make={model_make_id} model={model_name} />
            <h3 className="text-lg font-semibold">{model_name}</h3>
            <p className="text-sm text-gray-500">יצרן: {model_make_id}</p>
            {model_year && <p className="text-sm text-gray-500">שנה: {model_year}</p>}
            {model_trim && <p className="text-sm text-gray-500">רמת גימור: {model_trim}</p>}
            {model_body && <p className="text-sm text-gray-500">סוג: {model_body}</p>}
        </div>
    );
};

export default CarModelCard;
