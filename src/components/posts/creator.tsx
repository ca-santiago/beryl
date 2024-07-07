import { Session } from "@auth0/nextjs-auth0";
import { useRef } from "react";
import { createPost } from "../../services/post";
import { getUserIdFromSession } from "../../helpers/session";
import { useFormStatus } from "react-dom";

const CreateButton = () => {
  const { pending } = useFormStatus();

  if (pending) return (
    <p className="text-slate-600 text-center w-full font-semibold">Creating</p>
  );

  return (
    <button
      className="w-full rounded bg-blue-500 text-white font-semibold text-center"
      disabled={ pending }
    >
      Create
    </button>
  );
}

const PostCreator = ({ session }: { session: Session }) => {
  const titleRef = useRef<HTMLInputElement>(null);

  const handleCreateClick = (form: FormData) => {
    createPost(form)
      .then(() => {
        if (titleRef.current) {
          titleRef.current.value = '';
          titleRef.current.focus();
        }
      });
  }

  return (
    <form action={ f => handleCreateClick(f) }>
      <label htmlFor="title">Title</label>
      <input ref={ titleRef } type="text" name="title" required />
      <input type="hidden" name="userId" value={ getUserIdFromSession(session) } />
      <CreateButton />
    </form>
  );
}

export default PostCreator;