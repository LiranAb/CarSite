# 🚗 CarSite - מערכת ניהול רכבים

מערכת Fullstack לניהול רכבים עם הרשמה, התחברות, והרשאות משתמשים. המערכת כוללת ממשק נוח מבוסס React, שרת Express עם MongoDB, וניהול טוקנים עם JWT.

---

## 🧰 טכנולוגיות

- 🖥️ Frontend: React + Vite + Zustand + Tailwind CSS
- 🌐 Backend: Node.js + Express
- 🗄️ Database: MongoDB
- 🔐 Auth: JWT + bcrypt

---

## 📦 התקנה

1. **שכפול הריפוזיטורי:**

```bash
git clone https://github.com/LiranAb/CarSite.git
cd CarSite
```

2. **התקנת תלויות ל־Client:**

```bash
cd client
npm install
```

3. **התקנת תלויות ל־Server:**

```bash
cd ../server
npm install
```

4. **קובץ סביבה (.env):**

צור קובץ `.env` בתיקיית `server` עם התוכן הבא:

```env
PORT=5002
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

---

## ▶️ הרצת הפרויקט

### בצד השרת:

```bash
cd server
npm run dev
```

### בצד הלקוח:

```bash
cd client
npm run dev
```

---

## 👤 תכונות

- ✍️ הרשמה והתחברות משתמשים
- 🔒 אימות טוקנים (JWT)
- 🧭 לוח מחוונים מותאם לכל משתמש
- ⚙️ אפשרות שינוי שם או סיסמה בעמוד ההגדרות
- 📦 ארכיטקטורת MVC בצד השרת
- 📡 תקשורת בין לקוח לשרת באמצעות פרוקסי של Vite (`/api`)

---

## 📁 מבנה פרויקט

```
CarSite/
├── client/           # צד ה-Frontend
│   └── src/
│       ├── components/
│       ├── pages/
│       └── store/
│
├── server/           # צד ה-Backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   └── middleware/
```

---

## 🛠️ טיפים

- ודא שהשרת רץ על `http://localhost:5002` וש-Vite מוגדר כראוי ל־proxy (`vite.config.js`).
- שימוש בטוקן דרך Zustand נשמר ב־state – תוכל להרחיב לאחסון מקומי (localStorage).

---

## ✅ סטטוס

🚧 בפיתוח, גרסה ראשונה פעילה.

---

## 📩 יוצר

- לירן אבקסיס
- [GitHub](https://github.com/LiranAb)