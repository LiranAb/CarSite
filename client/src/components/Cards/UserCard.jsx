
const UserCard = ({ user }) => (
    <li className="border p-3 rounded-md bg-gray-50">
        <strong>שם:</strong> {user.name} <br />
        <strong>רכב:</strong> {user.carName || 'לא הוזן'}
    </li>
);

export default UserCard;
