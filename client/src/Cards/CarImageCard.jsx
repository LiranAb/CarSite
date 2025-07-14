import { useEffect, useState } from 'react';

const CarImageCard = ({ make, model }) => {
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await fetch(
                    `https://www.carimagery.com/api.asmx/GetImageUrl?searchTerm=${make} ${model}`
                );
                const text = await response.text();
                const urlMatch = text.match(/(https?:\/\/.*\.(?:png|jpg|jpeg))/);
                if (urlMatch) {
                    setImageUrl(urlMatch[0]);
                }
            } catch (error) {
                console.error('שגיאה בשליפת תמונה:', error);
            }
        };

        fetchImage();
    }, [make, model]);

    return (
        <div className="border p-4 rounded-lg shadow hover:shadow-lg transition">
            {imageUrl ? (
                <img src={imageUrl} alt={`${make} ${model}`} className="w-full h-48 object-cover" />
            ) : (
                <div className="text-center text-sm text-gray-500">טוען תמונה...</div>
            )}
        </div>
    );
};

export default CarImageCard;
