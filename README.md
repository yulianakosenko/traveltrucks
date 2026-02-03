````md
# TravelTrucks — Camper Rental App

Frontend application for a camper rental service.  
Implemented according to the technical assignment using React and Redux.

---

## 🔗 Links

- **Live version:** https://traveltrucks-izx4.vercel.app/
- **Source code:** https://github.com/yulianakosenko/traveltrucks

---

## 🛠 Tech Stack

- React (Vite)
- Redux Toolkit
- React Router
- Axios
- CSS Modules

---

## 📄 Functionality

### Pages
- Home page with CTA button
- Catalog page with camper list and filters
- Camper details page with gallery, features, reviews, and booking form

### Catalog
- Filtering by location, vehicle type, and equipment
- Add/remove campers to favorites (persisted in localStorage)
- Load More functionality
- Price formatting: `8000 → 8000,00`
- “Show more” opens camper details in a new browser tab

### Camper Details
- Data loaded via `GET /campers/:id`
- Photo gallery
- Features and vehicle details
- Reviews with 5-star rating
- Booking form with success notification

---

## 🧠 State Management

Global state is managed with Redux Toolkit:
- campers list
- filters
- favorites

---

## ℹ️ Additional Improvements

During development, several improvements were added beyond the basic requirements:
- favorites persistence using localStorage
- reusable components for camper features
- shared price formatting utility (DRY)
- client-side tab navigation using query parameters
- non-blocking success notification for booking form

---

## ▶️ Run Locally

```bash
npm install
npm run dev
````

---

## ✅ Status

* All technical requirements are implemented
* No console errors
* Client-side routing works correctly in production
* Deployed on Vercel

---

## 👩‍💻 Author

Yuliya Kostenko

```

