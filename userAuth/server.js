import express from "express";
import { connectDb } from "./config/db.js";
import { PORT } from "./config/config.js";
import userRoute from "./routes/userRoute.js";
import loginRoute from "./routes/authRoute.js";
import cookieParser from "cookie-parser";

const app = express();
app.use(cookieParser());

app.use(express.json());

app.use("/api/user", userRoute);
app.use("/api/user/login", loginRoute);

connectDb();
//Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
