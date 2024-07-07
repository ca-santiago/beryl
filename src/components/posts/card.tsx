import { useFormStatus } from "react-dom";
import { getUserIdFromSession } from "../../helpers/session";
import { deletePostById } from "../../services/post";
import { Session } from "@auth0/nextjs-auth0";

const DeleteButton = () => {
  const { pending } = useFormStatus();
  if (pending) return '...';

  return (
    <div className=" px-2 py-1 rounded bg-red-500 text-white">
      <button
        type="submit"
        disabled={pending}
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
  session: Session;
}

const PostCard = ({ data, session }: PostFromProps) => {
  return (
    <form
      className="flex flex-row gap-2 justify-between"
      action={ deletePostById }
    >
      <input type="hidden" name='id' value={ data.id } />
      <input type="hidden" name='userId' value={ getUserIdFromSession(session) } />
      <div className="mx-2 my-1 text-slate-600">
        { data.text }
      </div>
      <DeleteButton />
    </form>
  );
}

export default PostCard;