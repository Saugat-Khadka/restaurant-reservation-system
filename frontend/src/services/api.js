import axios from "axios";

// Create a reusable Axios instance
const API = axios.create({
  baseURL: "http://localhost:4000/api", // backend base URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Function to create a reservation
export const createReservation = async (data) => {
  try {
    const response = await API.post("/reservations", data); // make sure backend route matches
    return response.data; // returns { success: true, message: "...", data: {...} }
  } catch (error) {
    console.error("Error creating reservation:", error);
    throw error; // allow frontend to handle it
  }
};