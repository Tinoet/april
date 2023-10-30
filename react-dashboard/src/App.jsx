
// eslint-disable-next-line no-unused-vars
import React from "react";
import ProfileWrapper from "./Components/ProfileWrapper";
import Sidebar from "./Components/Sidebar";
import Dashboard from "./Components/Dashboard";

const App = () => {
  return (
    <div className='flex items-center justify-center mx-auto min-h-screen lg:max-w-7xl border border-gray-200 rounded mt-16'>
    <div className="grid grid-cols-3 space-x-4 w-full">
    <div className="col-span-1">
      <Sidebar />
    </div>
     <div className="col-span-2">
      <ProfileWrapper />
      <Dashboard />
     </div>
    </div>
    </div>
  );
};

export default App;
