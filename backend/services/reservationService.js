import { Reservation } from "../models/reservationModel.js";

export const createReservation = async (data) => {

  const {
    firstName,
    lastName,
    email,
    phone,
    reservationDate,
    reservationTime,
    guestCount,
  } = data;

  const reservation = await Reservation.create({
    firstName,
    lastName,
    email,
    phone,
    reservationDate,
    reservationTime,
    guestCount
  });

  return reservation;
};