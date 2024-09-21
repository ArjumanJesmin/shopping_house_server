import { Product } from "@prisma/client";
import prisma from "../../../shared/prisma";

const createProductFromDB = async (payload: Product) => {
  const result = await prisma.product.create({
    data: payload,
  });

  return result;
};

const getAllFromDB = async () => {
  return await prisma.product.findMany();
};
const getProductById = async (id: string) => {
  return await prisma.product.findUnique({
    where: { id },
  });
};

const updateProduct = async (id: string, data: Product) => {
  return await prisma.product.update({
    where: { id },
    data,
  });
};

const deleteProduct = async (id: string) => {
  return await prisma.product.delete({
    where: { id },
  });
};

export const ProductService = {
  createProductFromDB,
  getAllFromDB,
  getProductById,
  updateProduct,
  deleteProduct,
};
