import { Link, animateScroll as scroll } from "react-scroll";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="side1">
            <div className="row">
              <div className="col-md-3">
                <h1 className="logo">PandaKode</h1>
                <p className="footer-text">Your Partner For Success</p>
              </div>
              <div className="col-md-3">
                <p className="footer-title">Important Link</p>
                <ul>
                  <li>
                    <Link
                      spy={true}
                      smooth={true}
                      duration={1000}
                      to="headerbg"
                    >
                      {" "}
                      Home{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="services"
                      spy={true}
                      smooth={true}
                      duration={1000}
                    >
                      {" "}
                      Services{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="about-scroll"
                      spy={true}
                      smooth={true}
                      duration={1000}
                    >
                      About Us{" "}
                    </Link>
                  </li>
                  <li>
                    <Link to="contact" spy={true} smooth={true} duration={1000}>
                      {" "}
                      Contact{" "}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="side2">
            <div className="row">
              <div className="col-md-3">
                <p className="footer-title">Contact</p>
                <ul>
                  <li>
                    <Link to="#">Pandakode@outlook.com</Link>
                  </li>
                  <li>
                    <Link to="#">
                      {" "}
                      36 Carpenter Ave, Britsol, CT 06010, USA
                    </Link>
                  </li>
                  <li>
                    <Link to="#">+1 (203) 278-3337</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <p className="footer-title">Social Media</p>
                <ul>
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.linkedin.com/Pandakode.com"
                    >
                      {" "}
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.facebook.com/Pandakode.com"
                    >
                      {" "}
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.linkedin.com/Pandakode.com"
                    >
                      {" "}
                      Linkedin
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button onClick={() => scroll.scrollToTop(2500)} className="gotop">
        <i class="fa-regular fa-arrow-up"></i>{" "}
      </button>
    </footer>
  );
}
export default Footer;
