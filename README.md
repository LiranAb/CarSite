
# 🚗 Car Management Platform

מערכת לניהול משתמשים ורכבים, עם תמיכה בהרשמה, התחברות, שמירת טוקן ב־Zustand ו־LocalStorage, ותצוגת רכבים עם API לתמונות.

## 🛠 טכנולוגיות

- Frontend:
  - React + Vite
  - Zustand (ניהול State)
  - Tailwind CSS
  - React Router
- Backend:
  - Node.js + Express
  - MongoDB (באמצעות Mongoose)
  - JWT לאימות משתמשים
- שירותים חיצוניים:
  - Pexels API (תמונות רכבים)
  - CarQuery API (מידע על דגמי רכבים)

---

## 🚀 הפעלה מקומית



### 2. התקנת תלויות

#### בצד השרת
```bash
cd server
npm install
```

#### בצד הלקוח
```bash
cd client
npm install
```

---

### 3. הרצת הפרויקט

```bash
npm run dev
```

## 🧪 תכונות

- [x] רישום משתמש חדש
- [x] התחברות עם אימות סיסמה
- [x] שמירת JWT ב־LocalStorage
- [x] תצוגת מידע רכבים לפי יצרן, שנה ודגם
- [x] קבלת תמונות רכבים מ־Pexels API
- [x] תפריט ניווט מותאם לפי התחברות
- [x] עמוד פרופיל עם אפשרות לעריכת פרטים
---




## 🖼 תצוגה לדוגמה

- מסך רישום
- דף ניהול רכבים
- הצגת תוצאות לפי פילטרים (יצרן/שנה/דגם)
- עמוד פרופיל

---

## ✍️ קרדיטים

- תכנות:לירן אבקסיס
- API תמונות: [Pexels](https://www.pexels.com/api/)
- API דגמים: [CarQuery API](http://www.carqueryapi.com/)


