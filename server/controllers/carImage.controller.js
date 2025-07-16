import fetch from 'node-fetch';

export const getCarImageFromPexels = async (req, res) => {
    const { make, model } = req.query;

    if (!make || !model) {
        return res.status(400).json({ error: 'Missing make or model' });
    }

    const query = `${make} ${model} car`;
    const apiKey = process.env.PEXELS_API_KEY;

    try {
        const response = await fetch(`https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=1`, {
            headers: {
                Authorization: apiKey,
            },
        });

        const data = await response.json();

        if (data.photos && data.photos.length > 0) {
            return res.json({ imageUrl: data.photos[0].src.medium });
        } else {
            return res.status(404).json({ error: 'No image found' });
        }
    } catch (error) {
        console.error('Pexels Error:', error);
        res.status(500).json({ error: 'Failed to fetch image' });
    }
};
