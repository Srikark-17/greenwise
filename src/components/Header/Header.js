import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="leftContainer">
        <a href="/">GreenWise</a>
      </div>
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
    </div>
  );
}

export default Header;
