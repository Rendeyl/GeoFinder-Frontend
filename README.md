## 🌐 GeoFinder

This project is a full-stack web application built as part of an internship assessment. It features user authentication and real-time IP geolocation tracking using an external API.

The app allows users to log in, view their current IP information, and search for other IP addresses while keeping a history of previous searches.

---

## 🚀 Tech Stack

**Frontend**
- ReactJS

**Backend**
- Node.js
- RESTful services
- Database with seeded user

**Deployment**
- Vercel

---

## 🔑 Features

### 🔐 Authentication
- Login using email and password  
- Credentials validated through backend API  
- Automatic redirection based on authentication state  

### 🌍 IP Geolocation
- Displays user's current IP and location details  
- Fetches data from: https://ipinfo.io/geo  

### 🔍 IP Search
- Search for any IP address  
- Input validation for correct IP format  
- Dynamic update of geolocation data  

### 🕘 Search History
- Stores previously searched IP addresses  
- Reload geolocation data by selecting a history item  
- Clear search to revert to current user IP  
- Delete multiple history entries  

### 🗺️ Visualization
- Displays location data in a clear and user-friendly interface  
- Map integration with pinned coordinates  

---

## ⚙️ Application Flow

1. On app launch:
   - Redirects to Login if not authenticated  
   - Redirects to Home if already logged in  

2. After login:
   - User is taken to the Home screen  
   - Current IP and geolocation data are displayed  

3. User actions:
   - Search for IP addresses  
   - View and manage search history  
   - Reset to original IP data  

---
