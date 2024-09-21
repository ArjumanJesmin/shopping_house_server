import { Location } from "@prisma/client";
import prisma from "../../../shared/prisma";

const createLocationFromDB = async (payload: Location) => {
  const result = await prisma.location.create({
    data: payload,
  });

  return result;
};

const getAllFromDB = async () => {
  return await prisma.location.findMany();
};
const getLocationById = async (id: string) => {
  return await prisma.location.findUnique({
    where: { id },
  });
};

const updateLocation = async (id: string, data: Location) => {
  return await prisma.location.update({
    where: { id },
    data,
  });
};

const deleteLocation = async (id: string) => {
  return await prisma.location.delete({
    where: { id },
  });
};

export const LocationService = {
  createLocationFromDB,
  getLocationById,
  updateLocation,
  deleteLocation,
  getAllFromDB,
};
