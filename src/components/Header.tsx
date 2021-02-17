import { LogOutIcon } from "evergreen-ui";
import React from "react";
import { auth } from "../firebase";
import LOGO from "../pictures/WAYELOGO.png"

const Header = () => {
  const onSignOut = () => {
    auth().signOut();
  };
  return (
    <div className=" flex flex-row p-3 px-2.5 md:px-24 justify-between items-center">
      <div  >
        <img width="200px" height="100px"src={LOGO}/>
        </div>
      <div
        onClick={onSignOut}
        className=" hover:opacity-60 cursor-pointer flex flex-row items-center"
      >
        <p className=" hidden md:flex text-white mr-4 font-semibold text-sm">
          Sign Out
        </p>
        <LogOutIcon className=" text-red-400" />
      </div>
    </div>
  );
};

export default Header;
