const features = [
    "ניהול רשימת רכבים אישית",
    "מנוע חיפוש של רכבים",
    "התחברות והרשמה מאובטחות עם JWT",
    "צפייה ברכבים של משתמשים אחרים"
];

const FeaturesSection = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mx-auto text-right">
            {features.map((feature, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">🚀 תכונה {idx + 1}</h3>
                    <p className="text-gray-600">{feature}</p>
                </div>
            ))}
        </div>
    );
};

export default FeaturesSection;
