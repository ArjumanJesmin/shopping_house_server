import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { UserService } from "./user.service";

const createAdmin = catchAsync(async (req, res) => {
  const adminData = req.body;
  const result = await UserService.createAdmin(adminData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Admin created successfully!",
    data: result,
  });
});

export const UserController = {
  createAdmin,
};
