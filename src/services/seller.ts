'use server'

import { redirect } from "next/navigation";
import { prismaClient  } from ".";

const requestSellerAccount = async (form: FormData) => {
  const storeName = form.get('storeName') as string;
  const userId = form.get('userId') as string;

  await prismaClient.sellerAccount.create({
    data: {
      storeName,
      userId,
      verified: false, // pending verification
    }
  });
  redirect('/seller-admin');
}

const getSellerAccountInfoByUserId = async (userId: string) => {
  return await prismaClient.sellerAccount.findFirst({
    where: {
      userId,
    }
  });
}

interface UpdateSellerAccountInfo {
  id: string;
  userId: string;
  data: {
    storeName: string;
  }
}

const updateSellerAccountInfo = async ({
  id,
  userId,
  data,
}: UpdateSellerAccountInfo) => {
  const {
    storeName,
  } = data;

  await prismaClient.sellerAccount.update({
    where: {
      id,
      userId,
    },
    data: {
      storeName,
    }
  });
}

export {
  requestSellerAccount,
  getSellerAccountInfoByUserId,
  updateSellerAccountInfo,
}
