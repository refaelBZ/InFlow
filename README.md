# InFlow

InFlow is a simple and efficient web application designed to help small business owners, especially home-based businesses, manage and track their cash flow with ease. With a user-friendly interface, InFlow enables users to log expenses and income, set financial goals, and gain clear insights into their profits and losses, all within a specified date range.

## Problem Statement

Many small business owners struggle to keep track of their monthly expenses and income, making it difficult to set realistic goals, optimize spending, and maximize profits. This lack of clarity can lead to financial inefficiencies and missed opportunities for business growth.

## Solution

InFlow simplifies financial management with an intuitive interface that allows users to:
- Log expenses and income in real time.
- View total balances, profits, and losses clearly and concisely.
- Set financial goals and track progress towards achieving them.
- Access detailed lists of expenses and income based on customizable date ranges.

## Features

- **Real-time Tracking**: Easily log and manage income and expenses as they occur.
- **Goal Setting**: Define financial goals and monitor progress over time.
- **Date Range Filtering**: View financial data within customizable date ranges.
- **Detailed Reports**: Access comprehensive lists of expenses and income, as well as summaries of profits and losses.

## Technologies Used

### Frontend

- **React.js**: A dynamic and scalable framework used to create a modular and responsive user interface. Utilizes hooks like `useState` and `useEffect` for efficient state management.
- **SCSS**: Custom styling built from scratch, including reusable mixins and variables for a responsive and clean design, ensuring a seamless user experience.

### Backend

- **Node.js & Express.js**: A RESTful API structure powers the backend, handling data processing and communication between the frontend and database.
- **Mongoose**: Connects to **MongoDB**, providing a flexible schema for managing user, expense, and income data.

### Database

- **MongoDB**: A NoSQL database designed to store detailed records of expenses, income, and user-defined goals, allowing easy data retrieval and aggregation.

## Live Demo

Experience the application live: [InFlow](https://in-flow.vercel.app/)
