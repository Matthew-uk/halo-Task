import DashboardLayout from "@/app/components/dashboardLayout";
import Navigation from "@/app/components/dashboardNav";
import Layout from "@/app/components/layout";
import React from "react";

const Page = ({ params }: any) => {
  return (
    <div>
      <DashboardLayout>
        {/* {params.userId} */}
        <Navigation id={params.userId} />
      </DashboardLayout>
      {/* <Layout>{params.userId}</Layout> */}
    </div>
  );
};

export default Page;
