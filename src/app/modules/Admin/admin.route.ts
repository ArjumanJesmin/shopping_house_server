import express from "express";
import { AdminController } from "./admin.controller";
import validateRequest from "../../middlewares/validateRequest";
import { validationSchema } from "./admin.validation";

const router = express.Router();

router.get("/", AdminController.getAllFromDB);
router.get("/:id", AdminController.getByIdFromDB);
router.patch(
  "/:id",
  validateRequest(validationSchema.update),
  AdminController.updatedIntoDB
);
router.delete("/soft/:id", AdminController.softDeleteFromDB);

export const AdminRoutes = router;
