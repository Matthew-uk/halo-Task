import DashboardLayout from "@/app/components/dashboardLayout";
import Layout from "@/app/components/layout";
import React from "react";

const Page = ({ params }: any) => {
  return (
    <div>
      <DashboardLayout>{params.userId}</DashboardLayout>
      {/* <Layout>{params.userId}</Layout> */}
    </div>
  );
};

export default Page;
