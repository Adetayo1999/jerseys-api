import express from "express";
import cors from "cors";

const app = express();

// Server Port
const PORT = process.env.PORT || 8080;

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.listen(PORT, () => {
  // eslint-disable-next-line
  console.log(`[server]: Started on port:${PORT}`);
});
