import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { LocationService } from "./location.service";
import { RequestHandler } from "express";

const createLocationFromDB = catchAsync(async (req, res) => {
  const result = await LocationService.createLocationFromDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User Location created successfully!",
    data: result,
  });
});

const getAllFromDB: RequestHandler = catchAsync(async (req, res) => {
  const result = await LocationService.getAllFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Location data shown successfully by Id !",
    data: result,
  });
});
const getByIdFromDB: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await LocationService.getLocationById(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Location data shown successfully by Id !",
    data: result,
  });
});

const updatedIntoDB: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await LocationService.updateLocation(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Admin update data successfully by Id !",
    data: result,
  });
});
const deleteLocation: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await LocationService.deleteLocation(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Admin update data successfully by Id !",
    data: result,
  });
});

export const LocationController = {
  createLocationFromDB,
  getAllFromDB,
  getByIdFromDB,
  updatedIntoDB,
  deleteLocation,
};
