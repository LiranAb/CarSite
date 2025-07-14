import CarImageCard from './CarImageCard';


const CarModelCard = ({ model }) => (
    <div className="border p-4 rounded-lg shadow hover:shadow-lg transition">
        <CarImageCard make={model.Make_Name} model={model.Model_Name} />
        <h3 className="text-lg font-bold">{model.Model_Name}</h3>
        <p className="text-sm text-gray-600">{model.Make_Name}</p>
        <p className="text-sm text-gray-500">שנת ייצור: {model.Model_Year}</p>

    </div>
);

export default CarModelCard;
