# 🔐 Express Password-Protected Secret Server

This is a simple **Node.js + Express** application that demonstrates how to use middleware to protect routes with a password.  
If the correct password is entered, a secret page is revealed. 🚀

---

## 📌 Features
- Built with **Express.js**
- Custom **middleware** for password authentication
- Uses **body-parser** to handle form submissions
- Serves static HTML files
- Returns a **secret page** only if the correct password is provided (`ILoveProgramming`)

---

## 📂 Project Structure
```

.
├── public
│   ├── index.html   # Login page (asks for password)
│   └── secret.html  # Secret page (shown only if password is correct)
├── index.js         # Main server file
├── package.json
└── README.md

````

---

## ⚡ Installation & Usage

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/express-secret-server.git
   cd express-secret-server
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the server:

   ```bash
   node index.js
   ```

4. Open in your browser:

   ```
   http://localhost:3000
   ```

---

## 🔑 Default Password 
(You can add your own password too)

```
ILoveProgramming
```

---

## 🛠 Technologies Used

* **Node.js**
* **Express.js**
* **body-parser**
* **HTML**

---

## 📸 Demo

* Visit `http://localhost:3000`
* Enter the password
* Unlock the **secret page** 🎉

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 📄 License

This project is licensed under the MIT License.


