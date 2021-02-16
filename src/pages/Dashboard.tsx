import { Spinner } from "evergreen-ui";
import React from "react";
import ChartsMaps from "../components/ChartsMaps";
import Header from "../components/Header";
import { auth } from "../firebase";
import useMe from "../hooks/useMe";

const Dashboard = () => {
  const { me, loading, error } = useMe();

  const onSignOut = () => {
    auth().signOut();
  };

  console.log(me);
  if (loading) {
    return (
      <div className=" h-screen w-screen flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  if (!loading && me?.role === "Admin") {
    return (
      <div className=" w-full h-full">
        <Header />
        <div className=" p-6 px-4 bg-white md:px-24">
          <p className=" text-gray-700 text-3xl ">
            Welcome Back <br className=" md:hidden" />
            <span className=" font-bold">{me.name}</span>!
          </p>
        </div>
        <div className=" flex flex-col md:flex-row p-4">
          <div className=" w-full">
            <div className=" w-full p-3">
              {/*Charts, Maps*/}
              <ChartsMaps />
            </div>
            <div className=" w-full p-3 flex flex-col md:flex-row">
              <div className=" w-full">
                {/*Users*/}
                Users
              </div>
              <div className=" w-full">
                {/*Drivers*/}
                Drivers
              </div>
            </div>
          </div>
          <div className="w-full sm:w-2/3 md:w-1/3">
            {/**Orders */}
            <div className=" w-full p-3">Orders</div>
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
