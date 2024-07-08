
import { prismaClient } from ".";

const prisma = prismaClient;

const getUserData = async (userId: string) => {
  return await prisma.user.findFirst({
    where: {
      externalId: { equals: userId },
    },
  });
}

export const UserService = {
  getUserData,
}
