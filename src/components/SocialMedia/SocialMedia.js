import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faGithub,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faFile,
} from '@fortawesome/free-solid-svg-icons';

export default function SocialMedia() {
  let styleIcon = {
    color: '#027373',
    fontSize: '2em',
    marginRight: '10px',
  };
  return (
    <React.Fragment>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.linkedin.com/in/cffr90/"
      >
        <FontAwesomeIcon style={styleIcon} icon={faLinkedin} />
      </a>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.facebook.com/cffr90"
      >
        <FontAwesomeIcon style={styleIcon} icon={faFacebook} />
      </a>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://github.com/christopher73"
      >
        <FontAwesomeIcon style={styleIcon} icon={faGithub} />
      </a>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="mailto: christopher.fajardo73@gmail.com"
      >
        <FontAwesomeIcon style={styleIcon} icon={faEnvelope} />
      </a>{' '}
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://docs.google.com/document/export?format=pdf&id=1QzrFWpksFFqaBQL0JHEJ96o53v-TV2C2h-THKmEKtt8&includes_info_params=true"
      >
        <FontAwesomeIcon style={styleIcon} icon={faFile} />
      </a>
    </React.Fragment>
  );
}
