import { UserRole } from "@prisma/client";
import prisma from "../../../shared/prisma";
import * as bcrypt from "bcrypt";

const createAdmin = async (payload: any) => {
  if (!payload.admin || !payload.admin.email) {
    throw new Error("Admin details are missing or invalid");
  }
  const hashPassword: string = await bcrypt.hash(payload.password, 12);
  const userData = {
    email: payload.admin.email,
    password: hashPassword,
    role: UserRole.ADMIN,
  };

  const result = await prisma.$transaction(async (tn) => {
    await tn.user.create({
      data: userData,
    });
    const createdAdminData = await tn.admin.create({
      data: {
        email: payload.admin.email,
        name: payload.admin.name,
        contactNumber: payload.admin.contactNumber,
        isDeleted: payload.admin.isDeleted,
      },
    });
    return createdAdminData;
  });

  return result;
};

export const UserService = {
  createAdmin,
};
