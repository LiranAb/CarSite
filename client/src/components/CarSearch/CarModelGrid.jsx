
import CarModelCard from '../../Cards/CarModelCard';

const CarModelGrid = ({ models }) => {
    if (!Array.isArray(models)) return null;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {models.map((model) => (
                <CarModelCard
                    key={`${model.model_id || model.model_name}`}
                    model={model}
                />
            ))}
        </div>
    );
};

export default CarModelGrid;
