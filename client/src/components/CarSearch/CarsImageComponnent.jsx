
import { useEffect, useState } from "react";

const CarsImageComponnent = ({ make, model }) => {
    const [imageUrl, setImageUrl] = useState(null);

    useEffect(() => {
        const fetchImage = async () => {
            if (!make || !model) return;

            try {
                const res = await fetch(`/api/carimage?make=${make}&model=${model}`);
                const data = await res.json();
                setImageUrl(data.imageUrl);
            } catch (error) {
                console.error("שגיאה בשליפת תמונה:", error);
            }
        };

        fetchImage();
    }, [make, model]);

    return imageUrl ? (
        <img src={imageUrl} alt={`${make} ${model}`} className="w-full h-40 object-contain mb-4" />
    ) : (
        <div className="w-full h-40 bg-gray-100 flex items-center justify-center text-gray-400 text-sm mb-4">
            תמונה לא זמינה
        </div>
    );
};

export default CarsImageComponnent;
