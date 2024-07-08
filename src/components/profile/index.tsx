'use client';

import { useAppContext } from "../../context";

interface Props { };

const MiniProfileInfo = (props: Props) => {
  const { auth } = useAppContext();
  const { user } = auth.session;

  return (
    <div className="flex gap-2 mt-4 flex-col">
      <div className='flex justify-between'>
        <div className="flex gap-2 items-center">
          <img
            className="rounded-full w-7 h-7"
            src={ user.picture }
            alt={ user.name }
          />
          <p>{ user.name }</p>
        </div>
        <a className="px-2 py-1 rounded-lg bg-red-500 text-white" href="/api/auth/logout">Logout</a>
      </div>
    </div>
  );
}

export default MiniProfileInfo;