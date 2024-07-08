import { useRef } from "react";
import { createPost } from "../../services/post";
import { useFormStatus } from "react-dom";
import { User } from "@prisma/client";
import { useAppContext } from "../../context";

const CreateButton = () => {
  const { pending } = useFormStatus();

  if (pending) return (
    <p className="text-slate-600 text-center w-full font-semibold">Creating...</p>
  );

  return (
    <button
      className="w-full py-1 rounded bg-blue-500 text-white font-semibold text-center"
      disabled={ pending }
    >
      Create
    </button>
  );
}

interface Props { };

const PostCreator = (props: Props) => {
  const {
    auth: {
      userData,
    }
  } = useAppContext();

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
    <form 
      className="mt-2"
      action={ f => handleCreateClick(f) }
    >
      <input
        className=" text-slate-700 px-3 py-2 border bg-white w-full rounded-md"
        placeholder="Todo content"
        name="title"
        ref={ titleRef }
        required
        type="text"
      />
      <input type="hidden" name="userId" value={ userData.id } />
      <div className="mt-2">
        <CreateButton />
      </div>
    </form>
  );
}

export default PostCreator;