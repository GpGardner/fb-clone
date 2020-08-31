import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Feed from "./Components/Feed";
import Login from "./Components/Login";
import {useStateValue} from "./StateProvider"

function App() {

  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />

          <div className="app-body">

            <Sidebar />

            <Feed />

          </div>

        </>
      )}
    </div>
  );
}

export default App;
