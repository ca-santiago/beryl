import { redirect, RedirectType } from "next/navigation";
import { getSellerAccountInfoByUserId } from "../../services/seller";
import { getUserSession } from "../../services/session";

const SellerPage = async () => {
  const {
    userData,
  } = await getUserSession();

  const sellerAccountData = await getSellerAccountInfoByUserId(userData.id);

  if (!sellerAccountData) return redirect('/request-seller-account', RedirectType.push);

  return (
    <main className="font-inter text-slate-600 bg-slate-100 min-h-screen">
      <h1 className="text-center text-slate-700 font-semibold text-2xl pt-8">Welcome to { sellerAccountData.storeName }</h1>
      <section className="md:px-16 lg:px-[120px] mt-8">
        <div className="bg-white w-full p-4">
          <pre className="bg-slate-200/65 text-slate-700 p-2 rounded">
            { JSON.stringify(sellerAccountData, null, 2) }
          </pre>
          <p className="text-slate-700 mt-4 font-semibold text-lg">Products</p>
          <p className="mt-2">Empty....</p>
        </div>
      </section>
    </main>
  );
}

export default SellerPage;
