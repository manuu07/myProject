# Search API - Auto-Completion & Ranking

## 📌 Overview
This API provides **real-time search suggestions** with **auto-completion** and **ranking based on search frequency**. It is optimized for speed and efficiency, ensuring low-latency responses even under high load.

## 🚀 Features
- **Prefix-based auto-completion** for product search
- **Real-time frequency-based ranking**
- **Optimized for performance** using MongoDB indexing

---

## ⚙️ Setup Instructions

### **1️⃣ Prerequisites**
- **Node.js** (v16+ recommended)
- **MongoDB** (local or cloud instance)
- **pnpm** (preferred package manager)

### **2️⃣ Clone the Repository**
```sh
git clone https://github.com/manuu07/myProject.git
cd search-api
```

### **3️⃣ Install Dependencies**
```sh
npm install
```

### **4️⃣ Configure Environment Variables**
Create a `.env` file in the root folder and set the following:
```env
PORT=3000
MONGO_URI=
```

### **5️⃣ Start the Server**
```sh
npm start
```
Server runs on **http://localhost:3000**.

### **6️⃣ Run the Project**

Then start the project using:
```sh
npm start
```
For development:
```sh
npm dev
```

---
