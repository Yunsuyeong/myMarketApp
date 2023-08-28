import Product from "@/components/product";
import PageTitle from "@/components/pageTitle";
import { NextPage } from "next";
import { Item } from "@prisma/client";
import useSWR from "swr";
import { ItemWithCount } from "../index";

interface ISolds {
  id: number;
  item: ItemWithCount;
}

interface ISoldResponse {
  [key: string]: ISolds[];
}

const ProfileSold: NextPage = () => {
  const { data } = useSWR<ISoldResponse>("/api/users/profile/sold");
  return (
    <>
      <PageTitle title="Sold Item" />
      <div className="flex flex-col px-3 py-4 divide-y">
        {data?.solds?.map((sold) => (
          <Product
            id={sold.item.id}
            key={sold.id}
            name={sold.item.name}
            color="white"
            price={sold.item.price}
            commentNumber={1}
            heartNumber={sold.item._count.favs}
          />
        ))}
      </div>
    </>
  );
};

export default ProfileSold;
