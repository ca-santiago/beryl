import { useFormStatus } from "react-dom";
import { deletePostById } from "../../services/post";
import { Post, User } from "@prisma/client";

import { FaTrash } from "react-icons/fa6";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const DeleteButton = () => {
  const { pending } = useFormStatus();
  if (pending) return (
    <AiOutlineLoading3Quarters
      className="animate-spin text-cyan-900 m-1"
    />
  );

  return (
    <button
      className="p-1 rounded"
      disabled={ pending }
      type="submit"
    >
      <FaTrash className="text-[#e44141]" size={ 14 } />
    </button>
  );
}

interface PostFromProps {
  data: Post;
  userData: User;
}

const PostCard = ({ data, userData }: PostFromProps) => {
  return (
    <form
      className="flex flex-row gap-2 justify-between"
      action={ deletePostById }
    >
      <input type="hidden" name='id' value={ data.id } />
      <input type="hidden" name='userId' value={ userData.id } />
      <div className="mx-1 my-1 text-slate-600">
        <p className="text-base">{ data.text }</p>
      </div>
      <DeleteButton />
    </form>
  );
}

export default PostCard;