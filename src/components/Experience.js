import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";

const rstcLogo = require(`../assets/images/logos/rstc-logo.png`);
const ibmLogo = require(`../assets/images/logos/ibm-logo.jpg`);
const iotasolLogo = require(`../assets/images/logos/iotasol-logo.png`);
const cydevLogo = require(`../assets/images/logos/cydev-logo.png`);
const ambitionLogo = require(`../assets/images/logos/ambition-logo.png`);
const snackattacklogo = require(`../assets/images/logos/snackattack-logo.png`);

const getLogo = (logo) => {
  switch (logo) {
    case 'rstcLogo':
      return rstcLogo;
    case 'ibmLogo':
      return ibmLogo;
    case 'iotasolLogo':
      return iotasolLogo;
    case 'cydevLogo':
      return cydevLogo;
    case 'ambitionLogo':
      return ambitionLogo;
    case 'snackattacklogo':
      return snackattacklogo;
    default:
      return undefined;
  }
}

class Experience extends Component {
  render() {
    if (this.props.resumeExperience && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.experience;
      var work = this.props.resumeExperience.map((w, i) => {
        const technologies = w.technologies.map((technology, i) => {
          return (
            <Badge pill className="experience-badge mr-2 mb-2" key={i}>
              {technology}
            </Badge>
          );
        });

        return (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={w.years}
            iconStyle={{
              background: "#AE944F",
              color: "#fff",
              textAlign: "center",
            }}
            icon={<img className="experience-icon" src={getLogo(w.company.logo)} />}
            key={i}
          >
            <div style={{ textAlign: "left", marginBottom: "4px" }}>
              <Badge pill className="main-badge mr-2 mb-2" key={i}>
                {w?.company?.name}
              </Badge>
            </div>

            <h3
              className="vertical-timeline-element-title"
              style={{ textAlign: "left" }}
            >
              {w.title}
            </h3>

            {w?.company?.link && <a
              className="vertical-timeline-element-subtitle"
              style={{ textAlign: "left", fontSize: 15 }}
              href={w?.company?.link}
              target="_blank"
            >
              {w?.company?.link}
            </a> || null}

            <div style={{ textAlign: "left", marginTop: "15px" }}>{technologies}</div>

          </VerticalTimelineElement>
        );
      });
    }

    return (
      <section id="resume" className="pb-5">
        <div className="col-md-12 mx-auto">
          <div className="col-md-12">
            <h1 className="section-title header-label" style={{ color: "black" }}>
              <span className="text-black" style={{ textAlign: "center" }}>
                {sectionName}
              </span>
            </h1>
          </div>
        </div>
        <div className="col-md-8 mx-auto">
          <VerticalTimeline>
            {work}
            <VerticalTimelineElement
              iconStyle={{
                background: "#AE944F",
                color: "#fff",
                textAlign: "center",
              }}
              icon={
                <i className="fas fa-hourglass-start experience-icon" style={{ color: '#e9a1a1', margin: 'auto' }}></i>
              }
            />
          </VerticalTimeline>
        </div>
      </section>
    );
  }
}

export default Experience;
