import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Orders from "./pages/Orders";
import Users from "./pages/Users";

function App() {
  return (
    /*
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <TopCards />
      <div className="p-4 grid md:grid-cols-3 grid-cols-1 gap-4">
        <BarChart />
        <RecentOrders />
      </div>
    </div>
*/
    <HashRouter>
      <div className="bg-gray-100 min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
