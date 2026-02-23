# Student Interaction Panel — React Hooks Assignment

A single-page React application built using **functional components** and **React Hooks**.

## 🚀 Features

| # | Feature | Hook Used |
|---|---------|-----------|
| 1 | Login / Logout Toggle | `useState` |
| 2 | Click Counter | `useState` |
| 3 | Light / Dark Theme Switcher | `useState` |
| 4 | Component Load Console Message | `useEffect` |
| 5 | Live Feedback Input | `useState` |

## 🛠️ How to Run

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm start
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
student-panel/
├── public/
│   └── index.html
├── src/
│   ├── App.js
│   ├── index.js
│   ├── index.css
│   └── StudentInteractionPanel.jsx   ← Main component
├── .gitignore
├── package.json
└── README.md
```

## 📌 Rules Followed

- ✅ Only functional components used
- ✅ No class components
- ✅ Rules of Hooks followed
- ✅ `useEffect` runs only once on mount (empty dependency array `[]`)
