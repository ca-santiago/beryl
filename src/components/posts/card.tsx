import { useFormStatus } from "react-dom";
import { deletePostById } from "../../services/post";
import { User } from "@prisma/client";

const DeleteButton = () => {
  const { pending } = useFormStatus();
  if (pending) return '...';

  return (
    <div>
      <button
        className="bg-red-500 text-white px-2 py-1 rounded"
        disabled={ pending }
        type="submit"
      >
        Delete
      </button>
    </div>
  );
}

interface PostFromProps {
  data: {
    id: string;
    text: string;
  };
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
      <div className="mx-2 my-1 text-slate-600">
        { data.text }
      </div>
      <DeleteButton />
    </form>
  );
}

export default PostCard;