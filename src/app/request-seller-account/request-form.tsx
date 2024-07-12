'use client';

import { User } from "@prisma/client";
import { useFormStatus } from "react-dom";

import { requestSellerAccount } from "../../services/seller";

import cx from 'classnames';

const RequestButton = () => {
  const { pending } = useFormStatus();

  const classes = cx({
    "w-full px-2 py-1 rounded": true,
    'bg-slate-100 text-slate-700': pending,
    'text-white bg-blue-400': !pending,
  });

  return (
    <button
      className={ classes }
      disabled={ pending }
    >
      { pending ? 'Requesting...' : 'Request' }
    </button>
  );
}

interface Props {
  userData: User;
};

const RequestAccountForm = ({
  userData
}: Props) => {

  return (
    <form
      className="mx-auto max-w-96 mt-8 font-inter gap-4 flex flex-col"
      action={ requestSellerAccount }
    >
      <input
        type="hidden"
        name='userId'
        value={ userData.id }
      />
      <label
        className="text-slate-600 font-semibold text-base pl-1"
        htmlFor="storeName"
      >Give your store a name</label>
      <input
        className="px-3 py-2 rounded w-full border-slate-200 text-slate-500"
        type="text"
        id="storeName"
        name="storeName"
        placeholder=""
        required
        max={ 100 }
        minLength={ 3 }
      />
      <RequestButton />
    </form>
  );
}

export default RequestAccountForm;