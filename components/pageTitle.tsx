import { Helmet } from "react-helmet-async";

const PageTitle = ({ title }: any) => {
  return (
    <Helmet>
      <title>{title} | myMarket</title>
    </Helmet>
  );
};

export default PageTitle;
