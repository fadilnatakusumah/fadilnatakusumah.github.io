import React from "react";
import { PROJECTS } from "../../../lib/data";
import { Steps } from "../../commons/Steps";
import { ProjectsStyled } from "./index.styled";

const { Step } = Steps;

export function Projects() {
  return (
    <ProjectsStyled>
      <h2 className="heading-title">Projects</h2>
      <Steps type="projects">
        {PROJECTS.map((data, i) => (
          <Step
            key={`projects_${i}_${data.title}`}
            title={data.title}
            techstacks={data.techstacks}
            descriptions={data.descriptions}
            image={data.image}
            duration={data.duration}
            current={data.current}
            employment={data.employment}
            appLink={data.appLink}
            githubLink={data.githubLink}
          />
        ))}
      </Steps>
    </ProjectsStyled>
  );
}
