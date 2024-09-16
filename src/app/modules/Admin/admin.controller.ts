import { RequestHandler } from "express";
import { AdminService } from "./admin.service";

import httpStatus from "http-status";
import sendResponse from "../../../shared/sendResponse";
import catchAsync from "../../../shared/catchAsync";

const getAllFromDB: RequestHandler = catchAsync(async (req, res) => {
  //   console.log(req.query);
  //   const filters = pick(req.query, adminFilterAbleFields);
  //   const options = pick(req.query, ["limit", "page", "sortBy", "sortOrder"]);
  const result = await AdminService.getAllFromDB(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Admin data fetched!",
    // meta: result.meta,
    data: result,
  });
});

export const AdminController = {
  getAllFromDB,
};
