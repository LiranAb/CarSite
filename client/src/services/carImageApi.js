export const getCarImageUrl = async (carName) => {
    try {
        const response = await fetch(`https://www.carimagery.com/api.asmx/GetImageUrl?searchTerm=${encodeURIComponent(carName)}`);
        const text = await response.text();

        const match = text.match(/<string.*?>(.*?)<\/string>/);
        return match ? match[1] : null;
    } catch (err) {
        console.error('שגיאה בקבלת תמונה:', err);
        return null;
    }
};
