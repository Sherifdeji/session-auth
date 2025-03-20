import express from "express";
import authRouter from "./routes/auth.route";

const PORT = process.env.PORT || 3000;
const BASE_PATH = "/api/v1";

const app = express();

// MIDDLEWARES
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// ROUTES

app.use("/auth", authRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
