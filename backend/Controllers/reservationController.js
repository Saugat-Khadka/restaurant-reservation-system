import { createReservation } from "../services/reservationService.js";
import { ErrorHandler } from "../middlewares/error.js";

export const sendReservation = async (req, res, next) => {
  try {
    console.log(" Request received:",req.body); //checking

    const {
      firstName,
      lastName,
      email,
      phone,
      reservationDate,
      reservationTime,
      guestCount
    } = req.body;

    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !reservationDate ||
      !reservationTime ||
      !guestCount
    ) {
      return next(new ErrorHandler("Please fill the full reservation form", 400));
    }

    const reservation = await createReservation(req.body);

    res.status(201).json({
      success: true,
      message: "Reservation created successfully",
      data: reservation
    });

  } catch (error) {
    next(error);
  }
};