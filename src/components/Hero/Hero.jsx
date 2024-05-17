import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Xareni! </h1>
        <p className={styles.description}>
          I'm a student from Cal State Fullerton learning how to code!
        </p>
        <a href="mailto:xare.m3@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        
        src="/Profile-img.png" // Add this line to display the profile image
        alt="Profile Image"
        className={styles.heroImg}
      />
    
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};