import logo from "../assets/logo.png";

function Header() {
  return (
    <header>
      <div className="logo-arrow">
        <img src={logo}  alt="pic"/>
        <i class="fa fa-angle-down fa-3x" aria-hidden="true"></i>
      </div>

      <div className="headerbg"></div>
    </header>
  );
}
export default Header;
