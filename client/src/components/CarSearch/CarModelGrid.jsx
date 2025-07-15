import CarModelCard from '../../Cards/CarModelCard';

const CarModelGrid = ({ models }) => {
    if (!Array.isArray(models)) return null;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {models.map((m) => (
                <CarModelCard key={m.Model_ID || m.Model_Name} model={m} />
            ))}
        </div>
    );
};


export default CarModelGrid;
