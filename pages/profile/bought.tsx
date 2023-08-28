import Product from "@/components/product";
import PageTitle from "@/components/pageTitle";
import { NextPage } from "next";
import { ItemWithCount } from "../index";
import useSWR from "swr";

interface IBoughts {
  id: number;
  item: ItemWithCount;
}

interface IBoughtResponse {
  [key: string]: IBoughts[];
}

const ProfileBought: NextPage = () => {
  const { data } = useSWR<IBoughtResponse>("/api/users/profile/bought");
  return (
    <>
      <PageTitle title="Bought Item" />
      <div className="flex flex-col px-3 py-4 divide-y">
        {data?.boughts?.map((bought) => (
          <Product
            id={bought.item.id}
            key={bought.id}
            name={bought.item.name}
            color="white"
            price={bought.item.price}
            commentNumber={1}
            heartNumber={bought.item._count.favs}
          />
        ))}
      </div>
    </>
  );
};

export default ProfileBought;
