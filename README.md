 # MoneyMap - Income & Expense Tracker

## About
A simple application for tracking expenses and budgeting. The user will be able to enter expenses, view statistics, set limits.

## Features
- ✅ Registration / login
- ✅ Adding expenses with category, amount, date, and comment
- ✅ Viewing the list of expenses
- ✅ Filtering by date and category
- ✅ Displaying the current budget and limits
- ✅ Basic statistics (pie chart of expenses by category)

## Project Structure
```
├── public/               
├── src/
│   ├── api/   
│   ├── assets/          
│   │   ├── favicons/     
│   │   ├── fonts/        
│   │   ├── icons/        
│   │   └── images/       
│   │
│   ├── components/  
│   ├── data/      
│   ├── hooks/        
│   ├── layouts/             
│   ├── pages/            
│   ├── sections/         
│   ├── styles/          
│   ├── utils/          
│   ├── App.jsx        
│   └── main.jsx           
│
├── .gitignore            
├── eslint.config.js    
├── index.html         
├── package.json           
├── package-lock.json          
├── README.md              
└── vite.config.js  
 ```

## Stack
- **React 19** — library for building interactive user interfaces
- **React Router v7** — client-side routing for page navigation
- **SCSS** — CSS preprocessor with nesting, variables, mixins, and functions
- **Vite** — fast and modern build tool for development and production

## Installation & Setup

1. Clone the repository:
 git clone: https://github.com/ViktoriaNH/expense-accounting-panel.git
2. Navigate to the project folder: cd expense-accounting-panel
3. Install dependencies: npm install
4. Start the development server: npm start
5. Open your browser and go to: http://localhost:5173/

## Scripts
- `npm start` - start development server
- `npm run build` - build the project
- `npm run preview` - preview production build
- `npm run lint` - run ESLint to check for code issues
- `npm run lint:fix` - run ESLint and automatically fix fixable issues

## Code Style
- SCSS written using BEM
- Components follow PascalCase
- Commits follow Conventional Commits:
  - feat: ...
  - fix: ...
  - style: ...


