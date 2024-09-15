import { Admin } from "@prisma/client";
import prisma from "../../../shared/prisma";

const createAdmin = async (adminData: Admin) => {
  try {
    const admin = await prisma.admin.create({
      data: adminData,
    });

    return admin;
  } catch (error: any) {
    throw new Error("Failed to create admin: " + error.message);
  }
};

export const UserService = {
  createAdmin,
};
