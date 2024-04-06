# EazeBank

EazeBank is a virtual bank project where users can open a bank account, deposit and withdraw money, and make transfers between accounts. The project is developed using React and includes a variety of additional technologies.

## Installation and Running

1. Install dependencies:
    ```bash
    npm i
    ```
2. Run the project:
    ```bash
    npm run dev
    ```
The project is based on the [Vite React](https://vitejs.dev/) setup.

## Technologies and Libraries

- React
- React Query
- Supabase
- Recharts
- Styled-components
- Material-UI (MUI)
- React-hook-form
- React-error-boundary
- React-hot-toast
- React-icon
- React-router

## Main Features

- Open a bank account
- Deposit and withdraw money
- Make transfers between accounts
- Upload an avatar image
- Change password and fullName
- Filter transactions to show only deposits, transfers, or withdrawals
- Sort transactions
- Pagination
- Clipboard functionality

## Additional Features

- Lazy loading
- Suspense
- Prefetching

## Design Patterns

### Compound Component Pattern

Some of the components I built are highly reusable due to the implementation of the Compound Component Pattern. This design pattern allows for a flexible and composable API, making it easier to manage and extend components.

### Render Props Pattern

I also utilized the Render Props Pattern in some components to share code and functionality across different parts of the application. This pattern enables a more dynamic and flexible component structure, enhancing reusability and maintainability.
By leveraging these design patterns, EazeBank achieves a modular and maintainable codebase, ensuring scalability and ease of development.
