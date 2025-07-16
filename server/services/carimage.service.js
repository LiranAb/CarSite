import fetch from 'node-fetch';

export const fetchCarImage = async (make, model) => {
    const query = encodeURIComponent(`${make} ${model} car`);
    const url = `https://duckduckgo.com/?q=${query}&iax=images&ia=images`;

    const tokenRes = await fetch(url);
    const html = await tokenRes.text();
    const vqdMatch = html.match(/vqd='(.+?)'/);
    if (!vqdMatch) throw new Error('Failed to extract vqd');

    const vqd = vqdMatch[1];
    const apiUrl = `https://duckduckgo.com/i.js?l=us-en&o=json&q=${query}&vqd=${vqd}&f=,,,&p=1`;
    const apiRes = await fetch(apiUrl);
    const data = await apiRes.json();

    if (data.results?.length) return data.results[0].image;
    throw new Error('No images found');
};
