import React from "react";
import { Link } from "react-router-dom";

export default function Links() {
  return (
    <div className="side-bar-links">
      <Link to="/projects">
        <span>{" -> "}</span>Projects
      </Link>
      <Link to="/current-stack">
        <span>{" -> "}</span>Stack
      </Link>
      <Link to="/blog">
        <span>{" -> "}</span>Blog
      </Link>
      <Link
        to="/contact-me"
        id="btn-lets-talk"
        className="btn btn-lg shadow-lg "
      >
        Let's talk
      </Link>
    </div>
  );
}
