import React from "react";
import "./About.scss";

import { motion } from "framer-motion";
import { bios } from "../../../Data";
import portfolio from "../../../assets/portfolio.jpg";
const About = () => {
  return (
    <div className="container " id="about">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="title"
      >
        <span>Who Am I?</span>
        <h1>About Me</h1>
      </motion.div>

      <div className="about_container">
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="about_left"
        >
          <motion.img
            src={portfolio}
            whileHover={{ y: -48, x: -55 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
        <motion.div
          className="about_right"
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p>
            I believe being challenged every day drives the essence of our
            success. I like solving problems. My current role requires me to be
            a visionary and to be creatively and technically proficient. I find
            a great deal of energy every day from my work product. I want my
            career to be filled with opportunities to grow my skill sets and
            inspire others. Providing value is what every employer is seeking
            and that is something I truly believe in.
          </p>
          {bios.map((bio) => {
            return (
              <div className="bio" key={bio.id}>
                <span className="bioKey">
                  {bio.icon}
                  {bio.key}
                </span>
                <span className="bioValue">{bio.value}</span>
              </div>
            );
          })}
          <motion.a
            href="https://drive.google.com/file/d/1UOVH9wFIB5XmrWJ2TKByeSXMDSd8bITd/view?usp=share_link"
            target="_blank"
            onClick={() => {
              window.open(
                "https://drive.google.com/file/d/1UOVH9wFIB5XmrWJ2TKByeSXMDSd8bITd/view?usp=share_link",
                "_blank"
              );
              return false;
            }}
            download="#"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            View Resume
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
