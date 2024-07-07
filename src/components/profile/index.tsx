'use client';

import { Session } from "@auth0/nextjs-auth0";

interface Props {
  session: Session;
};

const ProfileClient = ({ session }: Props) => {
  const user = session.user;

  return (
    <div className="flex gap-2 mt-3">
      <div>
        <div className='flex gap-2'>
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
        <div className='mt-2'>
          <a className="px-2 py-1 rounded-lg bg-red-500 text-white" href="/api/auth/logout">Logout</a>
        </div>
      </div>
    </div>
  );
}

export default ProfileClient;