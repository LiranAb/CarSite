// hooks/UseFetchCarZoneData.js
export default async function fetchCarZoneData(make, setCarModels, setLoading, setError) {
    try {
        setLoading(true);
        setError(null);

        const res = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/${make}?format=json`);
        const data = await res.json();

        if (Array.isArray(data.Results)) {
            setCarModels(data.Results);
        } else {
            setError('שגיאה בקבלת הנתונים');
        }
    } catch (err) {
        setError('שגיאת רשת');
    } finally {
        setLoading(false);
    }
}
