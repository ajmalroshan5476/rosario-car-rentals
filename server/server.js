import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./configs/db.js";
import userRouter from "./routes/userRoutes.js";
import ownerRouter from "./routes/ownerRoutes.js";
import bookingRouter from "./routes/bookingRoutes.js";

const app = express();

// ✅ CORS Configuration
app.use(cors({
  origin: ['https://rosario-car-rentals.onrender.com'],
  credentials: true,
}));

app.use(express.json());

// Connect Database
await connectDB();

// Routes
app.get('/', (req, res) => res.send("Server is running"));
app.use('/api/user', userRouter);
app.use('/api/owner', ownerRouter);
app.use('/api/bookings', bookingRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
