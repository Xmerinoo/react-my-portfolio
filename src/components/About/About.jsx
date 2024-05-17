import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src="/Real-pfp.png"
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src="cursorIcon.png" alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              
              <p >
              I am a third-year computer science student at Cal State Fullerton. My journey to sharpen my skills has just begun as I transferred from being an animation student to a programming student. However, my love for creating hasn't stopped there. I do a lot of graphic work for clubs at Cal State Fullerton. My career goal is to blend programming and creative design together!
              </p>
            </div>
          </li>
         
          
        </ul>
      </div>
    </section>
  );
};