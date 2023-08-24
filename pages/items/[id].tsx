import Button from "@/components/button";
import Layout from "@/components/layout";
import PageTitle from "@/components/pageTitle";
import useMutation from "@/utils/client/useMutation";
import { cls } from "@/utils/client/utils";
import { Item, User } from "@prisma/client";
import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import useSWR, { useSWRConfig } from "swr";

interface ItemWithUser extends Item {
  user: User;
}

interface IItemDetailResponse {
  ok: boolean;
  item: ItemWithUser;
  isLiked: boolean;
  relatedItems: Item[];
}

interface IMutationResult {
  ok: boolean;
}

const ItemDetail: NextPage = () => {
  const router = useRouter();
  const { data, mutate: boundMutate } = useSWR<IItemDetailResponse>(
    router.query.id ? `/api/items/${router.query.id}` : null
  );
  const { mutate } = useSWRConfig();
  const [favorite, { loading }] = useMutation<IMutationResult>(
    `/api/items/${router.query.id}/fav`
  );
  const onFavClick = () => {
    if (!loading) {
      favorite({});
    }
    if (!data) {
      return;
    }
    boundMutate(
      (prev: any) => prev && { ...prev, isLiked: !prev.isLiked },
      false
    );
    // mutate()
  };
  return (
    <Layout canBack>
      <PageTitle title="Item Detail" />
      <div className="px-3 py-4">
        <div className="mb-8">
          <div className="h-96 bg-white" />
          <div className="flex items-center border-t border-b space-x-2 py-2">
            <div className="w-16 h-16 rounded-full bg-white" />
            <div>
              <p className="text-sm font-medium">{data?.item?.user?.name}</p>
              <Link href={"/profile"}>
                <p className="text-xs font-medium cursor-pointer">
                  View Profile &rarr;
                </p>
              </Link>
            </div>
          </div>
          <div className="mt-2">
            <h1 className="text-2xl font-bold">{data?.item?.name}</h1>
            <span className="text-2xl font-medium block mt-1 text-gray-300">
              ${data?.item?.price}
            </span>
            <p className="text-xl my-4">{data?.item?.description}</p>
            <div className="flex justify-between items-center space-x-2">
              <Button large text="Talk to Seller" />
              <button
                onClick={onFavClick}
                className={cls(
                  "flex justify-center items-center rounded-md",
                  data?.isLiked
                    ? "text-red-400 hover:text-red-500"
                    : "text-white hover:text-gray-300"
                )}
              >
                {data?.isLiked ? (
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6 "
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold">Similar Items</h3>
          <div className="grid grid-cols-3 mt-6 gap-4">
            {data?.relatedItems?.map((relatedItem) => (
              <div key={relatedItem.id}>
                <div className="h-48 w-full bg-white mb-4" />
                <h3 className="-mb-1">{relatedItem?.name}</h3>
                <p className="text-sm text-gray-300">${relatedItem?.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ItemDetail;
