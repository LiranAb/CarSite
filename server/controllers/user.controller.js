import User from '../models/user.model.js';
import bcrypt from 'bcrypt';

export const updateName = async (req, res) => {
    try {
        const { name } = req.body;
        const user = await User.findByIdAndUpdate(req.user._id, { name }, { new: true });
        res.json({ message: 'השם עודכן בהצלחה', user });
    } catch (err) {
        res.status(500).json({ message: 'שגיאה בעדכון השם' });
    }
};

export const updatePassword = async (req, res) => {
    try {
        const { oldPassword, newPassword } = req.body;
        const user = await User.findById(req.user._id);

        const isMatch = await bcrypt.compare(oldPassword, user.password);
        if (!isMatch) return res.status(400).json({ message: 'הסיסמה הנוכחית שגויה' });

        user.password = await bcrypt.hash(newPassword, 10);
        await user.save();

        res.json({ message: 'הסיסמה עודכנה בהצלחה' });
    } catch (err) {
        res.status(500).json({ message: 'שגיאה בעדכון הסיסמה' });
    }
};
export const updateCarName = async (req, res) => {
    try {
        const userId = req.user._id;
        const { carName } = req.body;

        const user = await User.findByIdAndUpdate(userId, { carName }, { new: true });

        res.json({ success: true, user });
    } catch (error) {
        res.status(500).json({ success: false, message: 'שגיאה בעדכון שם הרכב' });
    }
};