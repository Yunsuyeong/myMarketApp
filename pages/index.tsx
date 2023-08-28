import CircleBtn from "@/components/circleBtn";
import Product from "@/components/product";
import Layout from "@/components/layout";
import PageTitle from "@/components/pageTitle";
import useUser from "@/utils/client/useUser";
import { Item } from "@prisma/client";
import type { NextPage } from "next";
import useSWR from "swr";

export interface ItemWithCount extends Item {
  _count: {
    favs: number;
  };
}

interface IItemResponse {
  ok: boolean;
  items: ItemWithCount[];
}

const Home: NextPage = () => {
  const { user, isLoading } = useUser();
  const { data, isLoading: itemsLoading } = useSWR<IItemResponse>("/api/items");
  console.log(data);
  return (
    <Layout title={isLoading ? "Loading..." : `${user?.name}'s Home`} isSidebar>
      <PageTitle title="Home" />
      <div className="flex flex-col px-3 py-4 divide-y">
        {itemsLoading && (
          <h1 className="text-white font-bold text-2xl">Loading...</h1>
        )}
        {data?.items?.map((item) => (
          <Product
            id={item?.id}
            key={item?.id}
            name={item?.name}
            color="White"
            price={item?.price}
            heartNumber={item?._count?.favs}
            commentNumber={1}
          />
        ))}
        <CircleBtn href="/items/upload">
          <svg
            className="h-6 w-6"
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
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </CircleBtn>
      </div>
    </Layout>
  );
};

export default Home;
