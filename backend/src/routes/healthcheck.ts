import express, { Router } from "express";
const router: Router = express.Router();
router.use(express.json());

router.get("/healthcheck", (req, res) => {
  res.sendStatus(204);
});
export default router;
