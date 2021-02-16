import { Spinner } from "evergreen-ui";
import React from "react";
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
