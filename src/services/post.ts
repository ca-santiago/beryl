'use server';

import { revalidatePath } from "next/cache";
import { prismaClient } from ".";

const prisma = prismaClient;

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

interface PostContentUpdateArgs {
  postId: string;
  text: string;
}

const updatePostContent = async (content: PostContentUpdateArgs) =>  {
  await prisma.post.update({
    where: {
      id: content.postId,
    },
    data: {
      text: content.text,
    },
  });
}

export {
  createPost,
  deletePostById,
  getAllPosts,
  updatePostContent,
};
