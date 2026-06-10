import express from "express";
import cors from "cors";
const app = express();

// Konfigurasi CORS agar frontend Vite bisa mengakses API ini
app.use(cors({ origin: "*" }));

app.get("/", (req, res) => {
  res.json(portfolioData);
});

// Untuk local development
if (process.env.NODE_ENV !== "production") {
  app.listen(8080, () => console.log("Server berjalan di port 8080"));
}

export default app;