import { useRef } from "react";
import { createPost } from "../../services/post";
import { useFormStatus } from "react-dom";
import { useAppContext } from "../../context";

import cx from 'classnames';

const CreateButton = () => {
  const { pending } = useFormStatus();

  const wrapperClasses = cx({
    'w-full py-1 rounded font-semibold text-center': true,
    'bg-blue-500 text-white': !pending,
    'bg-slate-300 text-slate-600': pending,
  });

  return (
    <button
      className={ wrapperClasses }
      disabled={ pending }
    >
      { pending ? 'Creating...' : 'Create' }
    </button>
  );
}

interface Props { };

const PostCreator = (_: Props) => {
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
        className="text-slate-700 px-3 py-2 border bg-white w-full rounded-md focus:outline-none focus:border-slate-400"
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