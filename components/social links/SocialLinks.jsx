import React from "react";
import { socialLinks, socialImg } from "./SocialLinks.module.scss";

const SocialLinks = ({ colorMode }) => {
  return (
    <div className={socialLinks}>
      <img
        id={socialImg}
        src='assets/programming.jpg'
        alt='Programming on a computer with multiple screens'
      />
      <h3>Find me on Github & Linkedin</h3>
      <a target='_blank' href='#'>
        Github: codeOfTheFuture
      </a>
      <br />
      <a target='_blank' href='#'>
        Linkedin: Jeffrey Oliver
      </a>
    </div>
  );
};

export default SocialLinks;
