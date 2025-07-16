// ✅ controllers/carQueryController.js
import {
    fetchAllMakes,
    fetchYearsRange,
    fetchModelsByMakeAndYear
} from '../services/carquery.service.js';

export const getAllMakes = async (req, res) => {
    try {
        const makes = await fetchAllMakes();
        res.json(makes);
    } catch (err) {
        res.status(500).json({ error: 'שגיאה בקבלת יצרנים' });
    }
};

export const getYearsRange = async (req, res) => {
    try {
        const range = await fetchYearsRange();
        res.json(range);
    } catch (err) {
        res.status(500).json({ error: 'שגיאה בקבלת טווח שנים' });
    }
};

export const getModelsByMakeAndYear = async (req, res) => {
    const { make, year } = req.query;
    if (!make || !year) return res.status(400).json({ error: 'חסר make או year' });

    try {
        const models = await fetchModelsByMakeAndYear(make, year);
        res.json(models);
    } catch (err) {
        res.status(500).json({ error: 'שגיאה בקבלת דגמים' });
    }
};
