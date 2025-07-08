import React, { useState } from 'react';

const CarCard = ({ car, onDelete }) => {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <div className="bg-white rounded-xl shadow-md p-4 border w-full max-w-md mx-auto">
            <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-bold text-gray-800">
                    {car.brand} {car.model}
                </h3>
                <span className="text-sm text-gray-500">{car.year}</span>
            </div>

            <p className="text-gray-600 mb-2">מחיר: ₪{car.price.toLocaleString()}</p>

            {showDetails && car.imageUrl && (
                <img src={car.imageUrl} alt="car" className="w-full h-48 object-cover rounded-md mb-2" />
            )}

            <div className="flex justify-between items-center mt-4">
                <button
                    onClick={() => setShowDetails((prev) => !prev)}
                    className="text-sm text-blue-600 hover:underline"
                >
                    {showDetails ? 'הסתר תמונה' : 'הצג תמונה'}
                </button>

                {onDelete && (
                    <button
                        className="text-sm text-red-500 hover:underline"
                    >
                        מחק
                    </button>
                )}
            </div>
        </div>
    );
};

export default CarCard;
