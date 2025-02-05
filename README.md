🏆 CrowdCube
CrowdCube is a dynamic crowdfunding platform that enables users to create, manage, and contribute to fundraising campaigns. Whether it's for personal needs, creative projects, startups, or business ventures, CrowdCube ensures a seamless and user-friendly experience.

<!-- Add a valid screenshot link here -->

🌍 Live Demo
🔗 Visit CrowdCube Live

📌 Table of Contents
🚀 Features
🛠️ Technologies Used
📦 Dependencies
⚙️ Installation
📖 Usage
📚 Additional Resources
🤝 Contributors
📜 License
🚀 Features
✅ User Authentication – Secure login/registration using email/password and third-party OAuth, with toast notifications for user feedback.
✅ Campaign Management – Create, update, delete, and browse campaigns with real-time data updates and protected routes.
✅ Donation Features – Donate to active campaigns, view personal contributions, and receive alerts for expired campaigns.
✅ Interactive Navigation – Fully responsive design, dynamic navbar, dark/light theme toggle, and sorting functionality.
✅ Hosting & Deployment – Client is hosted on Netlify/Surge/Firebase, and the server is deployed on Vercel with Firebase integration.

🛠️ Technologies Used
Frontend: React, React Router, Material UI, TailwindCSS, DaisyUI
Backend: Firebase
Deployment: Vercel, Netlify, Firebase Hosting
State Management & UI: React Hooks, Emotion, Lottie
Notifications & Alerts: React Toastify, SweetAlert2
📦 Dependencies
The project uses the following dependencies:

json
Copy
Edit
"dependencies": {
  "@emotion/react": "^11.14.0",
  "@emotion/styled": "^11.14.0",
  "@mui/icons-material": "^6.3.0",
  "@mui/material": "^6.3.0",
  "firebase": "^11.1.0",
  "lottie-react": "^2.4.0",
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-router-dom": "^7.1.1",
  "react-simple-typewriter": "^5.0.1",
  "react-spinners": "^0.15.0",
  "react-toastify": "^11.0.2",
  "sweetalert2": "^11.15.10"
}
Dev Dependencies: ESLint, TailwindCSS, DaisyUI, PostCSS, Vite, and React plugins.

⚙️ Installation
To run CrowdCube locally, follow these steps:

1️⃣ Clone the repository

sh
Copy
Edit
git clone https://github.com/your-username/crowdcube.git
cd crowdcube
2️⃣ Install dependencies

sh
Copy
Edit
npm install
3️⃣ Start the development server

sh
Copy
Edit
npm run dev
The project should now be running on http://localhost:5173/ 🚀

📖 Usage
Sign up/Login using email, password, or third-party OAuth.
Browse and explore campaigns created by other users.
Create and manage your own crowdfunding campaigns.
Donate to campaigns and track your contributions.
Switch themes, sort campaigns, and enjoy a responsive UI.
📚 Additional Resources
React Documentation
Firebase Documentation
Vite Documentation
