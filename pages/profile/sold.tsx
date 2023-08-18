import Item from "@/components/item";
import PageTitle from "@/components/pageTitle";
import { NextPage } from "next";

const ProfileSold: NextPage = () => {
  return (
    <>
      <PageTitle title="Sold Item" />
      <div className="flex flex-col px-3 py-4 divide-y">
        {[...Array(10)].map((_, i) => (
          <Item
            id={i}
            key={i}
            name="iPad Pro 10.1"
            color="White"
            price={99.9}
            heartNumber={1}
            commentNumber={1}
          />
        ))}
      </div>
    </>
  );
};

export default ProfileSold;
