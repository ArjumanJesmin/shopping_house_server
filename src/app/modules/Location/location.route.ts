import express from "express";
import { LocationController } from "./location.controller";

const router = express.Router();

router.post("/", LocationController.createLocationFromDB);

// Get a location by ID
router.get("/:id", LocationController.getByIdFromDB);
router.get("/", LocationController.getAllFromDB);

// Update a location
router.patch("/:id", LocationController.updatedIntoDB);

// Delete a location
router.delete("/:id", LocationController.deleteLocation);

export const LocationRoute = router;
