import React from "react";
import { EXPERIENCES } from "../../../lib/data";
import { Steps } from "../../commons/Steps";
import { ExperiencesStyled } from "./index.styled";

const { Step } = Steps;

export function Experiences() {
  return (
    <ExperiencesStyled>
      <h2 className="heading-title">Experiences</h2>
      <Steps type="experiences">
        {EXPERIENCES.map((data, i) => (
          <Step
            key={`experience_${i}_${data.title}`}
            title={data.title}
            techstacks={data.techstacks}
            descriptions={data.descriptions}
            image={data.logo}
            duration={data.duration}
            current={data.current}
            employment={data.employment}
            link={data.link}
            at={data.at}
            about={data.about}
          />
        ))}
      </Steps>
    </ExperiencesStyled>
  );
}
