import {prismaClient} from '.';

const getSellerProducts = async (sellerId: string) => {
  return await prismaClient.product.findMany({
    where: {
      sellerId: sellerId,
    },
  });
}

export interface CreateProductArgs {
  sellerId: string;
  title: string;
  price: number,
};

const createProduct = async ({
  sellerId,
  title,
  price,
}: CreateProductArgs) => {
  const prod = await prismaClient.product.create({
    data: {
      sellerId,
      title,
      currency: 'USD',
      media: '',
      price,
    }
  });
}

export {
  getSellerProducts,
}
