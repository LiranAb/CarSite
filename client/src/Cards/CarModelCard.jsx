const CarModelCard = ({ model }) => {
    return (
        <div className="border p-4 rounded-lg shadow hover:shadow-md transition bg-gray-50">
            <h3 className="text-lg font-bold">{model.Model_Name}</h3>
            <p className="text-sm text-gray-600">שנת ייצור: {model.Model_Year}</p>
        </div>
    );
};

export default CarModelCard;
