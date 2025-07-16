// src/utils/getCarImageFromDuck.js
export async function getCarImageUrl(make, model) {
    const res = await fetch(`/api/carimage?make=${make}&model=${model}`);
    const data = await res.json();
    return data.imageUrl;
}
