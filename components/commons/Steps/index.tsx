import React, { ReactNode, useEffect, useState } from "react";
import { StyledSteps } from "./index.styled";
import Step, { StepProps } from "./Step";

interface StepsProps {
  type: "projects" | "experiences";
  children: ReactNode;
}

export function Steps({ children, type }: StepsProps) {
  const [data, setData] = useState([]);

  useEffect(() => {
    let childrenProps = [];
    React.Children.forEach(children, (element: StepProps) => {
      if (!React.isValidElement(element)) return;
      childrenProps.push(element.props);
    });
    setData(childrenProps);
  }, []);

  return (
    <StyledSteps>
      <div className="timeline-line"></div>
      {data.map((props, i) => (
        <Step type={type} {...props} key={`${type}_i`} />
      ))}
    </StyledSteps>
  );
}

Steps.Step = Step;
