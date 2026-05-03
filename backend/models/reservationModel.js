import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First name is required"],
    minLength: [3, "First name must be at least 3 characters"],
    trim: true,
  },

  lastName: {
    type: String,
    required: [true, "Last name is required"],
    minLength: [3, "Last name must be at least 3 characters"],
    trim: true,
  },

  email: {
    type: String,
    required: [true, "Email is required"],
    validate: [validator.isEmail, "Provide a valid email"],
  },

  phone: {
    type: String,
    required: [true, "Phone number is required"],
    minLength: [10, "Phone number must contain 10 digits"],
    maxLength: [10, "Phone number must contain 10 digits"],
  },

  reservationDate: {
    type: String,
    required: [true, "Reservation date is required"],
  },

  reservationTime: {
    type: String,
    required: [true, "Reservation time is required"],
  },

  guestCount: {
    type: Number,
    required: [true, "Guest count is required"],
  },

  tableNumber: {
    type: Number,
  }
});

export const Reservation = mongoose.model("Reservation", reservationSchema);