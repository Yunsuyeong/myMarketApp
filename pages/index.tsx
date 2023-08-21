import CircleBtn from "@/components/circleBtn";
import Item from "@/components/item";
import Layout from "@/components/layout";
import PageTitle from "@/components/pageTitle";
import useUser from "@/utils/client/useUser";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const { user, isLoading } = useUser();
  return (
    <Layout title={isLoading ? "Loading..." : `${user?.name}'s Home`} isSidebar>
      <PageTitle title="Home" />
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
