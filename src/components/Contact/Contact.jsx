import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("emailIcon.png")} alt="Email icon" />
          <a href="mailto:xare.m3@gmail.com">xare.m3@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/xareni-merino-rita-34ab98306?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BMqV6tBaKTF%2Bt%2BFbf0VBhrA%3D%3D">linkedin.com/XareniMerino</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/Xmerinoo">github.com/Xmerinoo</a>
        </li>
      </ul>
    </footer>
  );
};