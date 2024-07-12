
import { prismaClient } from ".";

const prisma = prismaClient;

const getUserData = async (userId: string) => {
  return await prisma.user.findUnique({
    where: {
      externalId: userId,
    }
  });
}

export const UserService = {
  getUserData,
}
