import React from "react";
import "./WhyGreen.css";
import Header from "../components/Header/Header.js";
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

<>
.dropdownWind {
  position: relative;
  display: inline-block;
}

.dropdown-contentWind {
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

<div class="dropdownWind">
  <span>Mouse over me</span>
  <div class="dropdown-contentWind">
    <p>Wind power is the conversion of energy from natural winds into electricity. It involves the usage of windmills, comprised of a foundation, the tower, the rotor hub, the nacelle, and the generator. These windmills are usually 80 meters (260 ft) tall in order for the wind to move the three fans attached to the rotor which moves the generator, producing electricity. 
</p>
  </div>
</div>

<>
.dropdownHydroelectricity {
  position: relative;
  display: inline-block;
}

.dropdown-contentHydroelectricity {
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

.dropdownHydroelectricity {
  position: relative;
  display: inline-block;
}

.dropdown-contentHydroelectricity {
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

<div class="dropdownHydroelectricity">
  <span>Mouse over me</span>
  <div class="dropdown-contentHydroelectricity">
    <p>Hydroelectric power, is a form of renewable energy that uses the power of water in motion to generate electricity. Hydropower can use the water stored in dams, or the natural flow of rivers and waterfalls, to rotate turbines that spin generators. Hydropower is one of the oldest and largest sources of renewable energy, supplying about one sixth of the world's electricity and more than all other renewable sources combined.
</p>
  </div>
</div>

.dropdownGeothermal {
  position: relative;
  display: inline-block;
}

.dropdown-contentGeothermal {
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

<div class="dropdownGeothermal">
  <span>Mouse over me</span>
  <div class="dropdown-contentGeothermal">
    <p>Geothermal Energy is a form of renewable energy that utilizes the heat within the earth. Heat from Earth’s interior generates surface phenomena such as lava flows, geysers, fumaroles, hot springs, and mud pots, which then are used for geothermal energy. Geothermal energy is used to heat baths, heat buildings, and for generating electricity. By using steam from geothermal sources, we can generate clean electricity.
</p>
  </div>
</div>
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
