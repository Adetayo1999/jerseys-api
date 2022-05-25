import { Router, Response } from "express";
import Jersey from "../service/jersey.service";

const router = Router();
const jerseyService = new Jersey();

router.get("/best-sellers", async (_, res: Response) => {
  try {
    const data = await jerseyService.getBestSellers();
    res.json(data);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/nba-jerseys", async (_, res: Response) => {
  try {
    const data = await jerseyService.getNBAJerseys();
    res.json(data);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/nfl-jerseys", async (_, res: Response) => {
  try {
    const data = await jerseyService.getNFLJerseys();
    res.json(data);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/soccer-jerseys", async (_, res: Response) => {
  try {
    const data = await jerseyService.getSoccerJerseys();
    res.json(data);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
