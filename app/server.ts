import express, { Response } from "express";
import cors from "cors";
import logger from "morgan";
import appRouter from "./routes";

const app = express();

// Server Port
const PORT = process.env.PORT || 8080;

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(logger("dev"));
app.use("/api/v1", appRouter);

app.get("/", (_, res: Response) => {
  res.json({ message: "Hi There, Welcome To New Jersey" });
});

app.use("*", (_, res: Response) => {
  res.json({ message: "INVALID ROUTE" });
});

app.listen(PORT, () => {
  // eslint-disable-next-line
  console.log(`[server]: Started on port:${PORT}`);
});
