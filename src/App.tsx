import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { auth } from "./firebase";
import AppRouter from "./routers/AppRouter";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);

  const checkUserSignIn = () => {
    auth().onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  };
  useEffect(() => {
    checkUserSignIn();
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        {isLoggedIn !== null ? (
          <AppRouter isLoggedIn={isLoggedIn} />
        ) : (
          <div className=" w-screen h-screen flex items-center justify-center">
            <p>Loading...</p>
          </div>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
