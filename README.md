# 🎓 Campus Incident Management System

A full-stack web application for secure campus incident reporting and management. Features include role-based access, interactive dashboards, real-time tracking, anonymous reporting, and analytics using Chart.js, FullCalendar.js, and Leaflet.js.

---

## 🚀 Features

- 📝 Secure incident reporting with detailed forms
- 🛡️ Role-based user access (Student, Admin, Committee)
- 📍 Location-based tracking with building and room selection
- 📊 Real-time dashboard with analytics (Chart.js, Leaflet.js)
- 🗓️ Incident calendar powered by FullCalendar.js
- 🧑‍🤝‍🧑 Support for anonymous reports and multiple campuses
- 📬 Email notifications and activity logs

---

## 🛠️ Tech Stack

**Frontend:**  
- HTML, CSS, JavaScript  
- Chart.js, Leaflet.js, FullCalendar.js

**Backend:**  
- PHP

**Database:**  
- MySQL

**Tools:**  
- Git, GitHub, Google Maps API

---

## 📷 Screenshots

<img width="1258" height="988" alt="image" src="https://github.com/user-attachments/assets/bebb9ea1-ab04-4c94-a6b7-7671c22ff4e0" />
<img width="845" height="972" alt="image" src="https://github.com/user-attachments/assets/6becdb0c-9dbd-4c7a-9eff-1e0ddf97f51d" />
<img width="1690" height="887" alt="image" src="https://github.com/user-attachments/assets/ae3b503c-6de6-48d6-816a-8ef7d029957d" />
<img width="1592" height="411" alt="image" src="https://github.com/user-attachments/assets/0c34c6cd-09f9-4637-919a-9a69e68f99b3" />



---

## 📁 Project Structure
```
campus_incident_management/
│
├── campus-backend/                      # Backend folder
│   ├── models/                          # Mongoose models for MongoDB
│   ├── node_modules/                    # Node.js dependencies
│   ├── routes/                          # API routes (e.g., auth.js)
│   ├── auth.js                          # Authentication logic
│   ├── package.json                     # Project dependencies and metadata
│   ├── package-lock.json                # Dependency lock file
│   └── server.js                        # Main Express server
│
├── css/
│   └── style.css                        # Global stylesheet (Dark theme + red accent)
│
├── js/
│   └── main.js                          # Frontend JS logic
│
├── academic_dashboard.html              # Academic dashboard UI
├── admin_dashboard.html                 # Admin dashboard UI
├── calender.html                        # Incident calendar view
├── dashboard.html                       # Unified user dashboard
├── disciplinary-report.html             # Disciplinary action module
├── incidents.html                       # View reported incidents
├── index.html                           # Landing page
├── login.html                           # Login UI
├── register.html                        # Registration UI
├── report.html                          # Incident reporting form
├── test.html                            # Sandbox/test UI
```


