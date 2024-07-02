import React from "react";
import Header from "../Components/header/Header";
//import App from "../Components/appsComponents/app";
import LoadingBox from "../Components/boxes/LoadingBox";
import MessageBox from "../Components/boxes/MessageBox";
import { useSelector } from "react-redux";

export default function AppScreen(props) {
  const appLists = useSelector((state) => state.appLists);
  const { loading, error, apps } = appLists;

  return (
    <>
      <Header />

      <div class="banner">
        <div class="overlay">
          <div class="container">
            <h1>My Recent Mobile Apps</h1>
            <button>
              <a href="">Home</a>
            </button>
          </div>
        </div>
      </div>

      <div class="container blogcontainer">
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="dabger">{error}</MessageBox>
        ) : (
          <div class="row">
            {/* {apps.map((app) => (
              <App key={app._id} app={app} />
            ))} */}
          </div>
        )}
      </div>
    </>
  );
}
