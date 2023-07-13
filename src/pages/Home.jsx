import React from "react";
import TopCards from "../components/TopCards";
import BarChart from "../components/BarChart";
import RecentOrders from "../components/RecentOrders";

const Home = () => {
  return (
    <div>
      <TopCards />
      <div className="p-4 grid md:grid-cols-3 grid-cols-1 gap-4">
        <BarChart />
        <RecentOrders />
      </div>
    </div>
  );
};

export default Home;
