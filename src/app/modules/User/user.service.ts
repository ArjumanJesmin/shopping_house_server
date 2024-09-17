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

const createCustomer = async (payload: any) => {
  console.log(payload);
  if (!payload.customer || !payload.customer.email) {
    throw new Error("Customer details are missing or invalid");
  }

  const hashPassword: string = await bcrypt.hash(payload.password, 12);
  const userData = {
    email: payload.customer.email,
    password: hashPassword,
    role: UserRole.CUSTOMER,
  };

  const result = await prisma.$transaction(async (tn) => {
    const createdUser = await tn.user.create({
      data: userData,
    });

    const createdCustomerData = await tn.customer.create({
      data: {
        email: payload.customer.email,
        name: payload.customer.name,
        contactNumber: payload.customer.contactNumber,
        user: {
          connect: {
            id: createdUser.id,
          },
        },
      },
    });

    return createdCustomerData;
  });

  return result;
};

export const UserService = {
  createAdmin,
  createCustomer,
};
