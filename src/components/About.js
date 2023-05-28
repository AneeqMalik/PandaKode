import about from '../assets/aboutus.png'
function About() {
  return (
    <>
      <div
        style={{ marginTop: "15rem", width: "100%", height: "10px" }}
        className="about-scroll"
      ></div>

      <div className="container about">
        <div className="row">
          <div className="text-center">
            <img
              width="100%"
              height="100%"
              alt="about"
              src={about}
              className="img-fluid"
            />
          </div>
          <div className="col-md-6">
            <h2 className="main-title about-h2">About Us</h2>
            <p className="main-p">
              Welcome to Pandakode, a leading software house that specializes in
              providing innovative and customized software solutions to
              businesses of all sizes. At Pandakode, we are passionate about
              leveraging the latest technologies and methodologies to help our
              clients achieve their goals and stay ahead of the competition. Our
              team of experienced and talented developers, designers, and
              project managers work together to deliver high-quality software
              products that meet the unique needs of each client. We pride
              ourselves on our ability to understand the specific requirements
              and challenges of each project, and we work closely with our
              clients to develop tailored solutions that meet their needs and
              exceed their expectations. From web and mobile app development to
              custom software solutions and enterprise systems integration, we
              have the expertise and experience to help businesses of all types
              and sizes. Our mission is to help our clients leverage technology
              to drive growth, streamline operations, and achieve their business
              objectives. We are committed to providing exceptional customer
              service and support, and we work tirelessly to ensure that our
              clients are completely satisfied with the solutions we deliver. So
              if you're looking for a reliable, experienced, and innovative
              software house to help take your business to the next level, look
              no further than Pandakode.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
