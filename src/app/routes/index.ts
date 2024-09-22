import express from "express";
import { UserRoute } from "../modules/User/user.route";
import { AdminRoutes } from "../modules/Admin/admin.route";
import { CustomerRoutes } from "../modules/Customer/customer.route";
import { AuthRoutes } from "../modules/Auth/auth.route";
import { LocationRoute } from "../modules/Location/location.route";
import { CategoryRoute } from "../modules/Category/category.route";
import { ProductRoute } from "../modules/Product/product.route";
import { ShoppingRoute } from "../modules/Shipping/shipping.route";
import { OrderRoutes } from "../modules/Order/order.route";
import { OrderItemRoute } from "../modules/OrderItem/orderItem.route";

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
  {
    path: "/category",
    route: CategoryRoute,
  },
  {
    path: "/product",
    route: ProductRoute,
  },
  {
    path: "/Shopping",
    route: ShoppingRoute,
  },
  {
    path: "/order",
    route: OrderRoutes,
  },
  {
    path: "/orderItem",
    route: OrderItemRoute,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
