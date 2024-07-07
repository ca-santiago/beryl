'use server';

import { revalidatePath } from "next/cache";
import { getPrismaClient } from ".";

const prisma = getPrismaClient();

const createPost = async (form: FormData) => {
  const title = form.get('title') as string;
  const userId = form.get('userId') as string;

  const result = await prisma.post.create({ data: { text: title, userId } });
  revalidatePath('/');
  return result;
}

const deletePostById = async (form: FormData) => {
  const id = form.get('id') as string;
  const userId = form.get('userId') as string;

  await prisma.post.delete({
    where: {
      id,
      userId: { equals: userId },
    }
  });
  revalidatePath('/');
}

const getAllPosts = async ({ userId }: {userId: string}) => {
  return await prisma.post.findMany({
    where: {
      userId: { equals: userId },
    }
  });
}

export {
  createPost,
  deletePostById,
  getAllPosts,
};
