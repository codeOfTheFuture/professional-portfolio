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
      <div>
        <a target='_blank' href='https://github.com/codeOfTheFuture'>
          Github: codeOfTheFuture
        </a>
        <br />
        <a
          target='_blank'
          href='https://www.linkedin.com/in/jeffrey-oliver-353260160/'
        >
          Linkedin: Jeffrey Oliver
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
