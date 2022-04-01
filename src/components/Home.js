import React from "react";
import { Link } from "react-router-dom";
import beers from "../assets/beers.png";
import newBeer from "../assets/newBeer.png";
import randomBeer from "../assets/randomBeer.png";


function Home({ width = 500 }) {
  return (
    <>
      <div className="nav-container">
        <div className="beer-link-box">
          <a href="/beers">
            <img src={beers} alt="Some Beer" width={width} />
            <h1>All Beers</h1>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam
            </p>
            <Link className="nav-item" to={"/beers"}></Link>
          </a>
        </div>

        <div className="beer-link-box">
          <a href="/randomBeer">
            <img src={newBeer} alt="Some Beer" width={width} />
            <h1>Random Beer</h1>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam
            </p>
            <Link className="nav-item" to={"/randomBeer"}></Link>
          </a>
        </div>

        <div className="beer-link-box">
          <a href="/newBeer">
            <img src={randomBeer} alt="Some Beer" width={width} />
            <h1>New Beer</h1>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam
            </p>
            <Link className="nav-item" to={"/newBeer"}></Link>
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;
