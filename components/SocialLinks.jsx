import React from "react";
import { urlFor } from "../sanity";
import { socialLinks, socialImg } from "../styles/SocialLinks.module.scss";

const SocialLinks = ({ socials, image }) => {
  return (
    <div className={socialLinks}>
      <img
        id={socialImg}
        src={urlFor(image).url()}
        alt="Programming on a computer with multiple screens"
      />
      <h3>Find me on Github & Linkedin</h3>
      <div>
        <a target="_blank" href={socials[0].url}>
          {socials[0].title}
        </a>
        <br />
        <a target="_blank" href={socials[1].url}>
          {socials[1].title}
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
