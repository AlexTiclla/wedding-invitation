import express from 'express';
import Guest from '../models/Guest.js';
import guestsController from '../controllers/guestsController.js';

const guestsRouter = express.Router();

guestsRouter.get("/", guestsController.getGuests);
guestsRouter.post("/", guestsController.postGuests);
guestsRouter.put("/:id", guestsController.updateGuest);
guestsRouter.patch("/:id/attendance", guestsController.updateAttendance);
guestsRouter.get("/stats", guestsController.getAttendanceStats);

export default guestsRouter;