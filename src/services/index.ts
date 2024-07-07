import { PrismaClient } from "@prisma/client";

let prismaClient: PrismaClient;

const startPrismaClient = () => {
  if (prismaClient) return;
  prismaClient = new PrismaClient();
  return prismaClient;
}

const getPrismaClient = (): PrismaClient => {
  if (prismaClient) return prismaClient;
  return startPrismaClient();
}

startPrismaClient();

export {
  getPrismaClient,
  prismaClient,
  startPrismaClient,
};