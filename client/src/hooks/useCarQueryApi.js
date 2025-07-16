
export const getAllMakes = async () => {
    const res = await fetch('/api/makes');
    if (!res.ok) throw new Error('שגיאה בשליפת יצרנים');
    return res.json();
};

export const getYearsRange = async () => {
    const res = await fetch('/api/years');
    if (!res.ok) throw new Error('שגיאה בשליפת טווח שנים');
    return res.json();
};

export const getModelsByMakeAndYear = async (make, year) => {
    const res = await fetch(`/api/models?make=${make}&year=${year}`);
    if (!res.ok) throw new Error('שגיאה בשליפת דגמים');
    return res.json();
};
