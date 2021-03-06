import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFile } from "@fortawesome/free-solid-svg-icons";
import resume from "./cfajardo_resume.pdf";
export default function SocialMedia() {
  return (
    <div className="social-icons">
      <a
        className="social-icon-link"
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.linkedin.com/in/cfajardo112/"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a
        className="social-icon-link"
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.facebook.com/cffr90"
      >
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a
        className="social-icon-link"
        rel="noopener noreferrer"
        target="_blank"
        href="https://github.com/christopher73"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        className="social-icon-link"
        rel="noopener noreferrer"
        target="_blank"
        href="mailto: cfajardo112@gmail.com"
      >
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
      <a
        className="social-icon-link"
        rel="noopener noreferrer"
        target="_blank"
        href={resume}
      >
        <FontAwesomeIcon icon={faFile} />
      </a>
    </div>
  );
}
