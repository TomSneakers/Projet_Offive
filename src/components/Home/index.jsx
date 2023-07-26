import React from "react";
import Sidebar from "./Sidebar.jsx";
import Gallery from "./Gallery.jsx";
import { withContext } from "../../context/index.jsx";

function Home({ value }) {
  return (
    <section className="pt-5 pb-5">
      <div className="container">
        <div className="row">
          <Sidebar {...value} />
          <Gallery {...value} />
        </div>
      </div>
    </section>
  );
}
export default withContext(Home);
