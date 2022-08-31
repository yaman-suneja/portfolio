import React, { Component } from "react";

class About extends Component {
  render() {
    if (this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.about;
      var about = this.props.resumeBasicInfo.description.map(d => <li style={{ marginBottom: 16 }}> {d}</li >);
    }

    return (
      <section id="about" >
        <div className="col-md-12">
          <h1 className="header-label" style={{ color: "black", marginBottom: 36 }}>
            <span>{sectionName}</span>
          </h1>
          <div className="row center mx-auto mb-5">
            <div className="col-md-12 center">
              <div className="col-md-10">
                <div className="card">
                  <div className="card-header">
                    <span
                      className="iconify"
                      data-icon="emojione:red-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:yellow-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:green-circle"
                      data-inline="false"
                    ></span>
                  </div>

                  <div className="about-me-details">
                    <div>
                      <p>Full Name:</p> <span>Yamandeep Singh Suneja</span>
                    </div>
                    <div>
                      <p>Phone:</p> <span>(705) 465-6613</span>
                    </div>
                    <div>
                      <p>Address:</p> <span>24 Cedar St S, Timmins, ON P4N 2G4</span>
                    </div>
                  </div>

                  <ul
                    className="card-body font-trebuchet text-justify mr-3"
                    style={{
                      height: "auto",
                      fontSize: 16,
                      lineHeight: '1.75em',
                      listStyleType: 'disclosure-closed',
                      marginLeft: '24px'
                    }}
                  >
                    {about}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
