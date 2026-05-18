# GeoFinder

GeoFinder is a full-stack web application built as an internship assessment. It features real-time IP geolocation tracking leveraging the IPinfo API and features dynamic map integration.

The application automatically detects and displays the user's current IP details on launch, allows searches for other IP addresses, and manages a persistent search history.

---

## Tech Stack

* **Frontend:** React.js
* **Backend:** Node.js, RESTful API
* **Deployment:** Vercel

---

## Core Features

### Geolocation & Search
* **Auto-Detect:** Instantly fetches and displays the user's current IP and location data upon loading the application using the `ipinfo.io` API.
* **IP Lookup:** Allows users to search any IP address with built-in input validation to catch formatting errors.
* **Map Integration:** Pins and visualizes coordinates dynamically on an interactive map interface.

### History Management
* **Search Logs:** Saves past searches so users can quickly re-fetch location data with a single click.
* **Data Controls:** Options to clear individual entries, bulk-delete history, or reset the view back to the user's local IP details.

---

## Technical Flow

1. **Initialization:** On load, the app hits the IPinfo API to grab the user's current network details and updates the state.
2. **User Interaction:** 
   * Submitting a valid IP updates the map and details view while pushing the query to the history list.
   * Selecting a history item re-queries that specific IP.
   * Clearing the search state reverts the UI back to the initial local IP data.

---

## Live Demo

The application is deployed and available to test online. 

👉 **[Launch GeoFinder Live App](https://geofinder-rd.vercel.app/)**
