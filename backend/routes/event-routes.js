const express = require("express");
const router = express.Router();
const Event = require("../model/event.js");
const eventsController = require("../controllers/events-controller");



router.get("/", eventsController.getAllEvents );
router.post("/", eventsController.addEvent);
router.get("/:id", eventsController.getById);
router.put("/:id", eventsController.updateEvent);
router.delete("/:id", eventsController.deleteEvent) ;




module.exports = router;