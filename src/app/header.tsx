'use client';

import Link from "next/link";
import { MiniProfileInfo } from "../components/profile";

const Header = () => {
  return (
    <nav className="shadow bg-white py-4 px-2">
      <div className="flex justify-between gap-10">
        <div>Logo</div>
        <div className="">
          <MiniProfileInfo />
        </div>
        <ul className="">
          <li>
            <Link href="/seller-admin">Seller</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;