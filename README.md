# 📦 Barcode-Driven Inventory Management App (React Native)

A mobile inventory management system built with **React Native** and **Expo**, allowing users to scan product barcodes, fetch product data from an external API, and manage products on a **Kanban-style drag-and-drop board**.

---

## 🚀 Features

- 🔍 **Barcode Scanning**  
  Scan barcodes using your device’s camera to fetch product details.

- 🧾 **External API Integration**  
  Retrieves product data from:  
  `https://products-test-aci.onrender.com/product/[barcode]`
- `Backend URL http://localhost:8080/api/v1`


- 🗃️ **Kanban Board Interface**  
  Drag-and-drop interface to move products between dynamic categories.

- 🛠️ **Category Management**  
  Create new product categories dynamically.

- 🔗 **REST API Integration**  
  Connects seamlessly with the backend Node.js/Express.js server.

---

## 🛠️ Tools & Libraries

| Tech/Libraries             | Description |
|---------------------------|-------------|
| **React Native**          | Core framework for cross-platform development. |
| **Expo**                  | For simplified build and development processes. |
| **expo-barcode-scanner**  | For scanning product barcodes. |
| **axios**                 | For API calls to external and internal servers. |
| **react-native-draggable-board** | Kanban-style drag-and-drop UI. |
| **React Native Paper**    | Material UI components. |

---



## 📦 Installation

```bash
git clone https://github.com/your-username/inventory-kanban-app.git
npm install
run npx expo start -c
```


## ⚙️ App Test Instructions

To test the app with a locally running backend:

1. Ensure both the **backend** and **React Native app** are running on the **same network** (e.g., connected to the same Wi-Fi).
2. Navigate to this file in your React Native project:  
   `services/api.js`
3. Update the `BASE_URL` with your computer’s **local IP address**, like so:

```js
const BASE_URL = 'http://<YOUR_COMPUTER_IP>:8080/api/v1';
