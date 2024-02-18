import React from "react";
import "./WhyGreen.css";
import Header from "../components/Header/Header.js";
import Footer from "../components/Footer/Footer.js";

const WhyGreen = () => {
  return (
    <>
      <Header />
      <div>WhyGreen</div>
      <Footer />
    </>
  );
};

export default WhyGreen;

<>
.dropdownSolar {
  position: relative;
  display: inline-block;
}

.dropdown-contentSolar {
  display: none;
  position: absolute;
  background-color: #ffffff;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 12px 16px;
  z-index: 1;
}

.dropdown:hover .dropdown-content {
  display: block;
}
<>

<div class="dropdownSolar">
  <span>Mouse over me</span>
  <div class="dropdown-contentSolar">
    <p>Solar power is the conversion of energy from sunlight into electricity. It involves the usage of solar panels, comprised of thousands of individual solar cells. These panels are usually fixed on top of roofs, placed on the ground or attached to moving objects. Solar has been used to power homes, air conditioning, dryers and various other applications. It has also been used by NASA to power their satellites. 
</p>
  </div>
</div>
