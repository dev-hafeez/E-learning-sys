

# Project Setup Instructions

Follow the steps below to set up and run the project:

## Prerequisites

Ensure the following tools are installed on your system:
- **Node.js** (latest version)
- **MongoDB** (local installation or a cloud instance)
- **MongoDB Compass** (for GUI-based database management)
- **Visual Studio Code (VS Code)** with the MongoDB extension installed.

---

## Installation and Setup

1. **Install MongoDB Compass**  
   - Launch MongoDB Compass and establish a connection to your MongoDB instance.

2. **Initialize MongoDB Shell**  
   - Open a terminal and run:
     ```bash
     mongosh
     ```
   - Confirm MongoDB shell (`mongosh`) is successfully connected to your instance.

3. **Install Node.js Dependencies**  
   Navigate to your project directory and run the following commands in the terminal:
   ```bash
   npm install express mongoose body-parser bcrypt cors
   npm install axios
   npm install react-router-dom
   ```

4. **Start the Server**  
   - Navigate to the backend folder in your project.
   - Run the backend server with:
     ```bash
     node server.js
     ```

5. **Run the Frontend**  
   - Open a terminal in the project root directory.
   - Start the frontend development server with:
     ```bash
     npm run dev
     ```

---

## Notes
- Ensure your MongoDB instance is running and properly connected before starting the project.
- Use **MongoDB Compass** to verify database connections and data.
- For any issues, ensure all dependencies are installed, and recheck the `server.js` file configuration.

---
