import React, { useState } from "react";
import "./Installation.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Installation = () => {
  const [solarDropdown, setSolarDropdown] = useState(false);
  const [windDropdown, setWindDropdown] = useState(false);
  const [hydroDropdown, setHydroDropdown] = useState(false);
  const [geoDropdown, setGeoDropdown] = useState(false);

  return (
    <>
      <Header />
      <div className="installationContainer">
        <span className="installationTitle">Installation</span>
      </div>
      <div className="installationMethodsContainer">
        <span className="installationMethodsTitle">Installation Methods</span>
        <div className="differentTypesOfEnergyContainer">
          <div
            className={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid black",
            }}
          >
            <div
              onClick={() => setSolarDropdown(!solarDropdown)}
              className="differentTypesOfEnergyDropdown"
            >
              <span
                style={{ color: "#e06666" }}
                className="differentTypesOfEnergyDropdownTitle"
              >
                Solar
              </span>
              {solarDropdown ? (
                <svg
                  class="svg"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M767.448 622.856a29.984 29.984 0 0 1-21.288-8.824L511.992 379.912l-234.16 234.128c-11.76 11.76-30.808 11.76-42.568 0s-11.76-30.808 0-42.568l255.44-255.408a30.072 30.072 0 0 1 42.552 0l255.472 255.408a30.088 30.088 0 0 1-21.28 51.384z"
                    fill="#888888"
                  />
                </svg>
              ) : (
                <svg
                  class="svg"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M507.8 727.728a30.016 30.016 0 0 1-21.288-8.824L231.104 463.496a30.088 30.088 0 0 1 0-42.568 30.088 30.088 0 0 1 42.568 0l234.128 234.128 234.16-234.128a30.088 30.088 0 0 1 42.568 0 30.088 30.088 0 0 1 0 42.568L529.08 718.904a30 30 0 0 1-21.28 8.824z"
                    fill="#888888"
                  />
                </svg>
              )}
            </div>
            {solarDropdown ? (
              <span className="differentTypesOfEnergyDropdownDescription">
                To install solar, one must find a solar contractor who
                specializes in installing solar panels for homes. To ensure they
                are qualified and certified, make sure they hold the
                industry-standard certification, awarded by the North American
                Board of Certified Energy Practitioners. They will first map out
                your roof and collect data regarding how much energy you use
                yearly. After mapping, permits will be filed, and solar panels
                will be installed onto your roof.
              </span>
            ) : (
              <></>
            )}
            <div
              onClick={() => setGeoDropdown(!geoDropdown)}
              className="differentTypesOfEnergyDropdown"
            >
              <span
                style={{ color: "#b45f06" }}
                className="differentTypesOfEnergyDropdownTitle"
              >
                Geothermal
              </span>
              {geoDropdown ? (
                <svg
                  class="svg"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M767.448 622.856a29.984 29.984 0 0 1-21.288-8.824L511.992 379.912l-234.16 234.128c-11.76 11.76-30.808 11.76-42.568 0s-11.76-30.808 0-42.568l255.44-255.408a30.072 30.072 0 0 1 42.552 0l255.472 255.408a30.088 30.088 0 0 1-21.28 51.384z"
                    fill="#888888"
                  />
                </svg>
              ) : (
                <svg
                  class="svg"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M507.8 727.728a30.016 30.016 0 0 1-21.288-8.824L231.104 463.496a30.088 30.088 0 0 1 0-42.568 30.088 30.088 0 0 1 42.568 0l234.128 234.128 234.16-234.128a30.088 30.088 0 0 1 42.568 0 30.088 30.088 0 0 1 0 42.568L529.08 718.904a30 30 0 0 1-21.28 8.824z"
                    fill="#888888"
                  />
                </svg>
              )}
            </div>
            {geoDropdown ? (
              <span className="differentTypesOfEnergyDropdownDescription">
                Installing geothermal pumps is tricky business, especially when
                trying to find out if geothermal is a viable option in your
                area. For geothermal technologies to operate, Factors such as
                the composition and properties of your soil and rock require
                consideration when designing a ground loop. To ensure success,
                find a qualified installer and contact your local utility
                company, the International Ground Source Heat Pump Association,
                or the Geothermal Exchange Organization for their listings of
                qualified installers in your area.
              </span>
            ) : (
              <></>
            )}
          </div>
          <div
            className={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "center",
              gap: "1rem",
            }}
          >
            <div
              onClick={() => setWindDropdown(!windDropdown)}
              className="differentTypesOfEnergyDropdown"
            >
              <span
                style={{ color: "#f1c232" }}
                className="differentTypesOfEnergyDropdownTitle"
              >
                Wind
              </span>
              {windDropdown ? (
                <svg
                  class="svg"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M767.448 622.856a29.984 29.984 0 0 1-21.288-8.824L511.992 379.912l-234.16 234.128c-11.76 11.76-30.808 11.76-42.568 0s-11.76-30.808 0-42.568l255.44-255.408a30.072 30.072 0 0 1 42.552 0l255.472 255.408a30.088 30.088 0 0 1-21.28 51.384z"
                    fill="#888888"
                  />
                </svg>
              ) : (
                <svg
                  class="svg"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M507.8 727.728a30.016 30.016 0 0 1-21.288-8.824L231.104 463.496a30.088 30.088 0 0 1 0-42.568 30.088 30.088 0 0 1 42.568 0l234.128 234.128 234.16-234.128a30.088 30.088 0 0 1 42.568 0 30.088 30.088 0 0 1 0 42.568L529.08 718.904a30 30 0 0 1-21.28 8.824z"
                    fill="#888888"
                  />
                </svg>
              )}
            </div>
            {windDropdown ? (
              <span className="differentTypesOfEnergyDropdownDescription">
                Wind power goes hand in hand with agriculture, due to the
                expansive space required to install it. When installing, a
                farmer has 2 choices, either doing an installation themselves,
                or opting for a commercial wind turbine, where a company pays
                the landowner a part of the profit for the amount of land used.
                To install a domestic wind turbine, one can reach out to an
                independent contractor or do it themselves. The other, more
                economically viable option is to have a commercial wind company
                install and operate the turbine. They offer farmers a decent
                cheque for using their land, often helping farmers make ends
                meet during challenging times. Things to watch out for when
                installing a wind turbine on your farm are: Available wind
                resource, Zoning Regulation and Aesthetic Issues.
              </span>
            ) : (
              <></>
            )}

            <div
              onClick={() => setHydroDropdown(!hydroDropdown)}
              className="differentTypesOfEnergyDropdown"
            >
              <span
                style={{ color: "#6d9eeb" }}
                className="differentTypesOfEnergyDropdownTitle"
              >
                Hydroelectricity
              </span>
              {hydroDropdown ? (
                <svg
                  class="svg"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M767.448 622.856a29.984 29.984 0 0 1-21.288-8.824L511.992 379.912l-234.16 234.128c-11.76 11.76-30.808 11.76-42.568 0s-11.76-30.808 0-42.568l255.44-255.408a30.072 30.072 0 0 1 42.552 0l255.472 255.408a30.088 30.088 0 0 1-21.28 51.384z"
                    fill="#888888"
                  />
                </svg>
              ) : (
                <svg
                  class="svg"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M507.8 727.728a30.016 30.016 0 0 1-21.288-8.824L231.104 463.496a30.088 30.088 0 0 1 0-42.568 30.088 30.088 0 0 1 42.568 0l234.128 234.128 234.16-234.128a30.088 30.088 0 0 1 42.568 0 30.088 30.088 0 0 1 0 42.568L529.08 718.904a30 30 0 0 1-21.28 8.824z"
                    fill="#888888"
                  />
                </svg>
              )}
            </div>
            {hydroDropdown ? (
              <span className="differentTypesOfEnergyDropdownDescription">
                To build a micro-hydropower system, you need access to flowing
                water on your property. A sufficient quantity of falling water
                must be available, which usually, but not always, means that
                hilly or mountainous sites are best. Building a micro-hydropower
                system requires a series of permits and water rights, which one
                will have to obtain before building. An alternative to
                micro-hydropower is developing a hydroelectric system with your
                community. This way you can cut costs while improving overall
                benefit for the community and environment.
              </span>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Installation;
