
import fetch from 'node-fetch';

const CAR_QUERY_API = 'https://www.carqueryapi.com/api/0.3';

export const fetchAllMakes = async () => {
    const res = await fetch(`${CAR_QUERY_API}?cmd=getMakes`);
    const data = await res.json();
    return data.Makes || [];
};

export const fetchYearsRange = async () => {
    const res = await fetch(`${CAR_QUERY_API}?cmd=getYears`);
    const data = await res.json();
    return data.Years || {};
};

export const fetchModelsByMakeAndYear = async (make, year) => {
    const url = `${CAR_QUERY_API}?cmd=getModels&make=${make}&year=${year}`;
    const res = await fetch(url);
    const data = await res.json();
    return data.Models || [];
};
