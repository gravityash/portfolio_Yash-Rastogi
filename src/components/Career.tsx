import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Vice President</h4>
                <h5>Language Legacy Club, IMS Engineering College</h5>
              </div>
              <h3>2025 - Present</h3>
            </div>
            <p>
              Leading the Language Legacy Club at IMS Engineering College, Ghaziabad.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Technology in Computer Science and Design</h4>
                <h5>IMS Engineering College • Ghaziabad UP</h5>
              </div>
              <h3>2027</h3>
            </div>
            <p>
              Grade: 7.83
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Intermediate</h4>
                <h5>K.C.M. School • Moradabad</h5>
              </div>
              <h3>2022 - 2023</h3>
            </div>
            <p></p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>High School</h4>
                <h5>K.C.M. School • Moradabad</h5>
              </div>
              <h3>2020 - 2021</h3>
            </div>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
