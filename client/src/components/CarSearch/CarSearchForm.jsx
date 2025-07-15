import { Button } from '../Button';

const CarSearchForm = ({ makeInput, setMakeInput, subModel, setSubModel, handleSearch }) => (
    <form
        className="flex flex-col sm:flex-row items-center justify-center mb-6 gap-2"
        onSubmit={handleSearch}
    >
        <input
            type="text"
            value={makeInput}
            onChange={(e) => setMakeInput(e.target.value)}
            placeholder="הכנס שם יצרן (למשל Honda)"
            className="border rounded p-2 w-64"
        />
        <input
            type="text"
            value={subModel}
            onChange={(e) => setSubModel(e.target.value)}
            placeholder="חפש תת דגם (למשל Civic)"
            className="border rounded p-2 w-64"
        />
        <Button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            text="חפש"
        />
    </form>
);

export default CarSearchForm;
