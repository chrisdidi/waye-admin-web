import { Spinner } from "evergreen-ui";
import React from "react";
import ChartsMaps from "../components/ChartsMaps";
import Header from "../components/Header";
import Orders from "../components/Orders";
import Users from "../components/Users";
import { auth } from "../firebase";
import useMe from "../hooks/useMe";

const Dashboard = () => {
  const { me, loading, error } = useMe();

  const onSignOut = () => {
    auth().signOut();
  };

  if (loading) {
    return (
      <div className=" h-screen w-screen flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  if (!loading && me?.role === "Admin") {
    return (
      //bg-gradient-to-r from-purple-400 via-pink-500 to-red-500
      //bg-gradient-to-r from-blue-200 to-indigo-500
      <div className=" w-full h-full pb-40 bg-gradient-to-r from-blue-400 to-indigo-500">
        <Header />
        <div className=" p-6 px-4  md:px-24">
          <p className=" text-white text-3xl ">
            Welcome Back <br className=" md:hidden" />
            <span className=" font-bold text-red-200">{me.name}</span>!
          </p>
        </div>
        <div className=" flex flex-col md:flex-row p-4">
          <div className=" w-full">
            <div className=" w-full p-3 animate-slide-up-03-out">
              {/*Charts, Maps*/}
              <ChartsMaps />
            </div>
            <div className=" w-full p-3 flex flex-col md:flex-row">
              <div className=" w-full animate-slide-up-1-out">
                <h1 className=" container-title text-white">Orders</h1>
                <Orders />
              </div>
            </div>
          </div>
          <div className="w-full sm:w-2/3 md:w-1/3">
            {/**Orders */}
            <div className=" w-full p-3 animate-slide-up-06-out">
              <h1 className=" container-title text-white">Users</h1>
              <Users />
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className=" w-screen h-screen flex flex-col items-center justify-center">
      {error?.message}
      <p className=" text-center mb-4">You are not allowed to access here.</p>
      <p
        className=" text-center text-red-400 font-semibold cursor-pointer hover:opacity-70"
        onClick={onSignOut}
      >
        Sign Out
      </p>
    </div>
  );
};

export default Dashboard;
