import React from "react";
import MobileHeader from "./MobileSectionHeader";

function About() {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About me"
    >
      <MobileHeader title="ABOUT ME" />
      <div className="text-vague">
        <p className="mb-4">
          In 2021, while pursuing my Computer Science degree at „Babeș-Bolyai”
          University, I decided to deepen my love for computers by working on
          side projects. I began by developing iOS apps using
          <span className="text-text"> Swift</span>. Later, I expanded my skills
          to
          <span className="text-text"> Java Spring Boot</span> and subsequently
          delved into front-end web development technologies, such as
          <span className="text-text"> Next.js</span>, React, Tailwind CSS, and
          TypeScript, enabling me to create dynamic Full Stack projects.
        </p>

        <p className="mb-4">
          Lately, I&apos;m focusing on sharpening my full-stack development
          skills. At{" "}
          <a
            className="text-primary border-b border-transparent pb-px transition group-hover:border-primary motion-reduce:transition-none"
            href="https://ciconia-systems.com/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Ciconia Systems (opens in a new tab)"
          >
            Ciconia Systems
          </a>
          , I&apos;m diving into a mix of frontend and backend development,
          mainly using Next.js and Spring. This work is focused on bringing
          various features and functionalities to life for our project,
          Tenderflow.
        </p>
        <p>
          When I&apos;m not at the computer, I&apos;m usually working out in the
          gym, photographing or reading.
        </p>
      </div>
    </section>
  );
}

export default About;
