import { useState } from "react";
import "./Header.css";
import { FaBars, FaXmark } from "react-icons/fa6";
import useWindowDimensions from "../../hooks/useWindowDimensions";

function Header() {
  const [showSidebar, setShowSidebar] = useState(false);
  const { height, width } = useWindowDimensions();

  const sidebar = () => {
    setShowSidebar(!showSidebar);
  };

  console.log(width <= 450);

  return (
    <div className="header">
      <div className="leftContainer">
        <a href="/">GreenWise</a>
      </div>
      {width <= 450 ? (
        <FaBars onClick={sidebar} id="menuIcon" />
      ) : (
        <div className="rightHeaderContainer">
          <a href="/" className="navOption">
            Home
          </a>
          <a href="/costs" className="navOption">
            Costs
          </a>
          <a href="/why-green" className="navOption">
            Why
          </a>
          <a href="/installation" className="navOption">
            Installation
          </a>
          <a href="/works-cited" className="navOption">
            Works Cited
          </a>
        </div>
      )}
      {showSidebar ? (
        <>
          <div className="sidebar">
            <div style={{ background: "transparent" }}>
              {showSidebar ? (
                <FaXmark
                  style={{
                    marginRight: "45vw",
                    background: "transparent",
                    color: "black",
                  }}
                  className="menuIcon"
                  onClick={sidebar}
                />
              ) : (
                <FaBars className="menuIcon" onClick={sidebar} />
              )}
            </div>
            <div className="optionsContainer">
              <>
                <a href="/" className="navOption">
                  Home
                </a>
                <a href="/costs" className="navOption">
                  Costs
                </a>
                <a href="/why-green" className="navOption">
                  Why
                </a>
                <a href="/installation" className="navOption">
                  Installation
                </a>
                <a href="/works-cited" className="navOption">
                  Works Cited
                </a>
              </>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Header;
