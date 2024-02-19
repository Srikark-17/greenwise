import React from "react";
import "./worksCited.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const worksCited = () => {
  return (
    <>
      <Header />
      <div className="homeContainer">
        <span className="titleWorksCited">Sources</span>
      </div>
      <div className="mainContainer">
        <span className="headingWorksCited">Works Cited:</span>
        <span className="workscitedDescription">
          Solar Energy | Description, Uses, & Facts.{" "}
          <a href="https://www.britannica.com/science/solar-energy">
            Encyclopædia Britannica
          </a>
        </span>
        <span className="workscitedDescription">
          Wind Turbine for Farms (All You Need to Know).{" "}
          <a href="https://climatebiz.com/wind-turbine-for-farms/">
            Climatebiz
          </a>
        </span>
        <span className="workscitedDescription">
          All the Advantages of Geothermal Energy.{" "}
          <a href="https://www.enelgreenpower.com/learning-hub/renewable-energies/geothermal-energy/advantages">
            Enel Green Power
          </a>
        </span>
        <span className="workscitedDescription">
          Use Hydroelectricity to Power Your Home.{" "}
          <a href="https://www.energysavingtrust.org.uk/advice/hydroelectricity/">
            Energy Saving Trust
          </a>
        </span>
        <span className="workscitedDescription">
          Federal Tax Credits for Energy Efficiency.{" "}
          <a href="https://www.energystar.gov/about/federal_tax_credits#:~:text=If%20you%20invest%20in%20renewable">
            Energy Star
          </a>
        </span>
        <span className="workscitedDescription">
          Cost of Renewable Energy: Does Clean Energy Cost More?{" "}
          <a href="https://www.inspirecleanenergy.com/blog/clean-energy-101/cost-of-renewable-energy">
            Inspire Clean Energy
          </a>
        </span>
        <span className="workscitedDescription">
          Residential Clean Energy Credit | Internal Revenue Service.{" "}
          <a href="https://www.irs.gov/credits-deductions/residential-clean-energy-credit#limits">
            Internal Revenue Service
          </a>
        </span>
        <span className="workscitedDescription">
          Geothermal Energy.{" "}
          <a href="https://www.britannica.com/science/geothermal-energy">
            Encyclopædia Britannica
          </a>
        </span>
        <span className="workscitedDescription">
          Hydroelectric Energy.{" "}
          <a href="https://education.nationalgeographic.org/resource/hydroelectric-energy/">
            National Geographic
          </a>
        </span>
        <span className="workscitedDescription">
          Wind Energy | National Geographic Society.{" "}
          <a href="https://education.nationalgeographic.org/resource/wind-energy/">
            National Geographic Society
          </a>
        </span>
        <span className="workscitedDescription">
          What Is Green Energy? | National Grid Group.{" "}
          <a href="https://www.nationalgrid.com/stories/energy-explained/what-is-green-energy">
            National Grid
          </a>
        </span>
        <span className="workscitedDescription">
          Homeowner’s Guide to Going Solar.{" "}
          <a href="https://www.energy.gov/eere/solar/homeowners-guide-going-solar">
            Office of Energy Efficiency & Renewable Energy
          </a>
        </span>
        <span className="workscitedDescription">
          Homeowner’s Guide to the Federal Tax Credit for Solar Photovoltaics.{" "}
          <a href="https://www.energy.gov/eere/solar/homeowners-guide-federal-tax-credit-solar-photovoltaics">
            Solar Energy Technologies Office
          </a>
        </span>
        <span className="workscitedDescription">
          How Does Solar Work?{" "}
          <a href="https://www.energy.gov/eere/solar/how-does-solar-work">
            Solar Energy Technologies Office
          </a>
        </span>
        <span className="workscitedDescription">
          What Is Green Energy? (Definition, Types and Examples).{" "}
          <a href="https://www.twi-global.com/technical-knowledge/faqs/what-is-green-energy">
            TWI
          </a>
        </span>
        <span className="workscitedDescription">
          Choosing and Installing a Geothermal Heat Pump System.{" "}
          <a href="https://www.energy.gov/energysaver/choosing-and-installing-geothermal-heat-pump-system">
            US Department of Energy
          </a>
        </span>
        <span className="workscitedDescription">
          How a Wind Turbine Works - Text Version.{" "}
          <a href="https://www.energy.gov/eere/wind/how-wind-turbine-works-text-version">
            Wind Energy Technologies Office
          </a>
        </span>
        <span className="workscitedDescription">
          What Is Wind Power?{" "}
          <a href="https://windexchange.energy.gov/what-is-wind">
            windexchange
          </a>
        </span>
        <span className="headingWorksCited">Image Citations</span>
        <span className="workscitedDescription">
          Two-Engineers-Installing-Solar-Panels-On-Roof.{" "}
          <a href="https://media.istockphoto.com/id/1405880267/photo/two-engineers-installing-solar-panels-on-roof.jpg?s=612x612&w=0&k=20&c=OvQDbJaTnMM4jPfIA3y5vrO88i98NZJRahZtnYFZCq0=">
            Istock Photo
          </a>
        </span>
        <span className="workscitedDescription">
          How Do Offices Run on 24/7 Clean Energy?{" "}
          <a href="https://blog.google/outreach-initiatives/sustainability/how-do-offices-run-on-247-clean-energy/">
            Google
          </a>
        </span>
        <span className="workscitedDescription">
          UnDraw | Colorful Illustrations.{" "}
          <a href="https://undraw.co/">Limpitsouni, Katerina</a>
        </span>
        <span className="workscitedDescription">
          Why Your Company Should Be Procuring Green Energy.{" "}
          <a href="https://watchwire.ai/procuring-green-energy/">WatchWire</a>
        </span>
        <span className="workscitedDescription">
          Clean Energy Tax Credits Get a Boost in New Climate Law | Article |
          EESI.{" "}
          <a href="https://www.eesi.org/articles/view/clean-energy-tax-credits-get-a-boost-in-new-climate-law">
            Yañez-Barnuevo, Miguel
          </a>
        </span>
        <span className="headingWorksCited">Necessary Documentation</span>
        <a
          style={{ fontFamily: "Open Sans" }}
          href="../SCC.pdf"
          target="_blank"
        >
          Student Copyright Checklist
        </a>
        <a
          style={{ fontFamily: "Open Sans" }}
          href="../plan-of-work-log.pdf"
          target="_blank"
        >
          Plan of Work Log
        </a>
      </div>
      <Footer />
    </>
  );
};

export default worksCited;
