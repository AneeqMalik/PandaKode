import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";

function Services() {
  return (
    <div className="container services">
      <h2 className="main-title text-center">Our Services</h2>
      <div className="card-cover">
        <div className="col-md-12">
          <div className="card-row">
            <div className="col-md-4 mb-2">
              <div class="cardBox">
                <div className="card">
                  <div className="front">
                    <img src={service1}  alt="pic"/>
                    <p
                      style={{
                        color: "black",
                      }}
                    >
                      Technical services like
                    </p>
                    <strong>&#x21bb;</strong>
                  </div>
                  <div className="back">
                    <p className="card1-p"
                      style={{
                        textAlign: "center",
                        color: "black",
                      }}
                    >
                      Custom Software Development, Web Development, Mobile App
                      Development, Cloud Solutions, Enterprise System
                      Integration, Technology Cunsulting, Ecommerce Solutions,
                      Artificial Intelligence (AI) and Machine Learning (ML)
                      Development, Blockchain Development, Internet of Things
                      (IoT) Development, Augmented Reality (AR) and Virtual
                      Reality (VR) Development, Big Data Analytics,
                      Cybersecurity
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-2">
              <div class="cardBox">
                <div className="card">
                  <div className="front">
                    <img src={service2}  alt="pic"/>
                    <p
                      style={{
                        color: "black",
                      }}
                    >
                      Creative services like
                    </p>
                    <strong>&#x21bb;</strong>
                  </div>
                  <div className="back">
                    <p
                      style={{
                        textAlign: "center",
                        color: "black",
                        fontSize: "16px",
                      }}
                    >
                      Graphic Designing, Video Editing, 3D Modeling, User
                      Interface (UI) and User Experience (UX) Design
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-2">
              <div class="cardBox">
                <div className="card">
                  <div className="front">
                    <img src={service3}  alt=""/>
                    <p
                      style={{
                        color: "black",
                        fontSize: "20px"
                      }}
                    >
                      Promotional services like,
                    </p>
                    <strong>&#x21bb;</strong>
                  </div>
                  <div className="back">
                    <p
                      style={{
                        textAlign: "center",
                        color: "black",
                        fontSize: "16px",
                      }}
                    >
                      Promotional services like, Digital Marketing, Sales
                      Promotion, Public Relations and Sponsorships.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Services;
