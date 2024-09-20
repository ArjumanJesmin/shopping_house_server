import express from "express";
import { UserRoute } from "../modules/User/user.route";
import { AdminRoutes } from "../modules/Admin/admin.route";
import { CustomerRoutes } from "../modules/Customer/customer.route";
import { AuthRoutes } from "../modules/Auth/auth.route";
import { LocationRoute } from "../modules/Location/location.route";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/user",
    route: UserRoute,
  },
  {
    path: "/admin",
    route: AdminRoutes,
  },
  {
    path: "/customer",
    route: CustomerRoutes,
  },
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/location",
    route: LocationRoute,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
