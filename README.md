## Project Name

# **Shopdesk**

## Project Description

Shopdesk is a web-based retail management system that simplifies stock tracking for retailers. It solves the problem of inefficient stock management by providing a user-friendly interface for adding, viewing, editing, and soft-deleting stock items. With secure user authentication, retailers can confidently manage their inventory and ensure accurate stock records.

---

## Features

- **User Authentication**:

  - Users can log in with their email and password.
  - Incorrect credentials block access to the system.

- **Stock Management**:

  - **Add Stock**: Users can add new stock items with details like name, SKU code, price, and quantity.
  - **View Stock**: Users can view a list of all active stock items.
  - **Edit Stock**: Users can update stock details (name, price, quantity) while keeping SKU codes read-only.
  - **Soft-Delete Stock**: Users can soft-delete stock items, which are marked as "Is deleted" in the database and hidden from the stock list.



## Technologies Used

- **Frontend**:
  - Next.js (React framework for server-side rendering and static site generation).
  - Tailwind CSS (utility-first CSS framework for styling).
  - **shadcn/ui**: A collection of reusable, accessible, and customizable UI components built with Radix UI and Tailwind CSS.

---

## Contributors

//will be added

## Live Demo

https://g1pgkdnt-3000.uks1.devtunnels.ms/

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

- Node.js (version 16.8 or later)
- npm or yarn

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/hngprojects/shopdesk-fe.git

   ```

2. **Navigate to the project directory**

        cd SHOPDESK-FE

3. **Install dependencies**

        npm install
           or
        yarn install

4.  **Run the development server**

        npm run dev
           or
        yarn dev

5.  **Access the application**

    Open your browser and navigate to:

    http://localhost:3000
