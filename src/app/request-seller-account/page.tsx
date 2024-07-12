import { redirect } from "next/navigation";
import { getSellerAccountInfoByUserId } from "../../services/seller";
import { getUserSession } from "../../services/session";
import RequestAccountForm from "./request-form";

const Page = async () => {
  const {
    userData,
  } = await getUserSession();

  const sellerAccount = await getSellerAccountInfoByUserId(userData.id);

  if (sellerAccount) return redirect('/seller-admin');

  return (
    <div className="bg-slate-100 h-screen w-full">
      <h1 className="font-semibold text-center text-slate-600 text-2xl">Welcome to create a seller account</h1>
      <p className="text-center text-slate-700">Lets start here</p>
      <RequestAccountForm
        userData={ userData }
      />
    </div>
  );
}

export default Page;
