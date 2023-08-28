import Product from "@/components/product";
import PageTitle from "@/components/pageTitle";
import { NextPage } from "next";
import { ItemWithCount } from "../index";
import useSWR from "swr";

interface ILikes {
  id: number;
  item: ItemWithCount;
}

interface ILikedResponse {
  [key: string]: ILikes[];
}

const ProfileLiked: NextPage = () => {
  const { data } = useSWR<ILikedResponse>("/api/users/profile/liked");
  return (
    <>
      <PageTitle title="Liked Item" />
      <div className="flex flex-col px-3 py-4 divide-y">
        {data?.likes?.map((liked) => (
          <Product
            id={liked.item.id}
            key={liked.id}
            name={liked.item.name}
            color="white"
            price={liked.item.price}
            commentNumber={1}
            heartNumber={liked.item._count.favs}
          />
        ))}
      </div>
    </>
  );
};

export default ProfileLiked;
