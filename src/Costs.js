import React from "react";
import "./Costs.css";
import Header from "../components/Header/Header";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import table from "./summarycleanImage.png";

const Home = () => {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/why-green`;
    navigate(path);
  };

  return (
    <>
      <Header />
      <div className="homeContainer">
        <div className="firstContainerCosts">
          <div className="leftContainer">
            <span className="titleCosts">Costs</span>
          </div>
        </div>
        <div className="secondContainer">
          <span className="secondTitle">
            Costs of Renewable Energy
          </span>
          <span className="secondDescription">
          The price of renewable energy drops as infrastructure increases. Solar energy alone has dropped to around $0.50 per watt, and renewable energy sources are some of the most affordable. Newly installed renewable power capacity is increasingly less expensive than the cheapest fossil-fuel-based power generation options. Replacing coal with wind and solar could cut costs by around $23 billion per year. 
          </span>
        </div>
        <div className = "thirdTitlecosts">
          <span className="thirdTitlecosts">Tax Rebates</span>
        </div>
        <div className="thirdContainercosts">
          <span className="thirdDescriptioncosts">
            As a homeowner, if you switch to green energy, the government will provide you with tax credits for things such as rooftop solar, wind energy, geothermal heat pumps and battery storage. You can claim the annual credit every year that you install eligible property until the credit begins to phase out in 2033. The credit percentage rate phases down to 26 percent for property placed in service in 2033 and 22 percent for property placed in service in 2034. This is done through the Residential Clean Energy Credit which equals up to 30% of the costs of new, qualified  clean energy property for your home. The credit is nonrefundable, so the credit amount you receive can't exceed the amount you owe in tax. The credit has no annual or lifetime dollar limit except for credit limits for fuel cell property. You can claim the annual credit every year that you install eligible property until the credit begins to phase out in 2033 .
          </span>
          <img className = "wrap"  src = {table} alt = "sui" width = "525px"></img>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
