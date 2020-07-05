import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFile } from "@fortawesome/free-solid-svg-icons";
import resume from "./ChristopherResume2020.pdf";
export default function SocialMedia() {
  return (
    <div className='social-icon'>
      <a
        className='social-icon-link'
        rel='noopener noreferrer'
        target='_blank'
        href='https://www.linkedin.com/in/cffr90/'
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a
        className='social-icon-link'
        rel='noopener noreferrer'
        target='_blank'
        href='https://www.facebook.com/cffr90'
      >
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a
        className='social-icon-link'
        rel='noopener noreferrer'
        target='_blank'
        href='https://github.com/christopher73'
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        className='social-icon-link'
        rel='noopener noreferrer'
        target='_blank'
        href='mailto: christopher.fajardo73@gmail.com'
      >
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
      <a
        className='social-icon-link'
        rel='noopener noreferrer'
        target='_blank'
        href={resume}
      >
        <FontAwesomeIcon icon={faFile} />
      </a>
    </div>
  );
}
