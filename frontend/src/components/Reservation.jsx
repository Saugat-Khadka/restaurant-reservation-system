import { useState } from "react";
import { createReservation } from "../services/api"; // adjust path if needed

const Reservation = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    reservationDate: "",
    reservationTime: "",
    guestCount: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await createReservation(form); // send form to backend

      if (data.success) {
        alert("Reservation submitted successfully!");
        setForm({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          reservationDate: "",
          reservationTime: "",
          guestCount: "",
        });
      } else {
        alert("Failed to submit reservation. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Error connecting to server. Please check backend.");
    }
  };

  return (
    <section id="reservation" className="w-full bg-gradient-to-b from-purple-50 to-white py-20 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-purple-700 mb-12">
          Book Your Table
        </h2>
        <div className="bg-white shadow-xl rounded-3xl p-10 md:p-16">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              name="firstName"
              placeholder="First Name"
              value={form.firstName}
              onChange={handleChange}
              className="border border-purple-200 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <input
              name="lastName"
              placeholder="Last Name"
              value={form.lastName}
              onChange={handleChange}
              className="border border-purple-200 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="border border-purple-200 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <input
              name="phone"
              placeholder="Phone"
              value={form.phone}
              onChange={handleChange}
              className="border border-purple-200 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <input
              name="reservationDate"
              type="date"
              value={form.reservationDate}
              onChange={handleChange}
              className="border border-purple-200 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <input
              name="reservationTime"
              type="time"
              value={form.reservationTime}
              onChange={handleChange}
              className="border border-purple-200 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <input
              name="guestCount"
              type="number"
              placeholder="Number of Guests"
              value={form.guestCount}
              onChange={handleChange}
              min={1}
              required
              className="border border-purple-200 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-purple-500 md:col-span-2"
            />
            <button
              type="submit"
              className="md:col-span-2 bg-gradient-to-r from-purple-600 to-purple-500 text-white py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-purple-600 transition"
            >
              Reserve Table
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Reservation;