import { Admin, Prisma, UserStatus } from "@prisma/client";

import prisma from "../../../shared/prisma";
import { IAdminFilterRequest } from "./admin.interface";
import { IPaginationOptions } from "../../interfaces/pagination";
import { paginationHelper } from "../../../helpers/paginationHelper";
import { adminSearchAbleFields } from "./admin.constant";

const getAllFromDB = async (params: any) => {
  console.log(params);
  //   const { page, limit, skip } = paginationHelper.calculatePagination(options);
  //   const { searchTerm, ...filterData } = params;

  const andConditions: Prisma.AdminWhereInput[] = [];

  if (params.searchTerm) {
    andConditions.push({
      OR: adminSearchAbleFields.map((field) => ({
        [field]: {
          contains: params.searchTerm,
          mode: "insensitive",
        },
      })),
    });
  }

  //   if (Object.keys(filterData).length > 0) {
  //     andConditions.push({
  //       AND: Object.keys(filterData).map((key) => ({
  //         [key]: {
  //           equals: (filterData as any)[key],
  //         },
  //       })),
  //     });
  //   }

  //   andConditions.push({
  //     isDeleted: false,
  //   });

  //   //console.dir(andConditions, { depth: 'inifinity' })
  //   const whereConditions: Prisma.AdminWhereInput = { AND: andConditions };

  const result = await prisma.admin.findMany({
    where: {
      OR: [
        {
          name: {
            contains: params.searchTerm,
            mode: "insensitive",
          },
        },
        {
          email: {
            contains: params.searchTerm,
            mode: "insensitive",
          },
        },
      ],
    },
  });

  //   const total = await prisma.admin.count({
  //     where: whereConditions,
  //   });

  return result;
};

export const AdminService = {
  getAllFromDB,
};
