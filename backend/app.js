import express from "express";
import cors from "cors";
import reservationRoutes from "./routes/reservationRoutes.js";
import { errorMiddleware } from "./middlewares/error.js";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/reservations", reservationRoutes);

app.use(errorMiddleware);

export default app;