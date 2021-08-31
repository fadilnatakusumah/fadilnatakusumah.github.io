import classnames from "classnames";
import React, { useState } from "react";
import {
  FaBriefcase,
  FaChevronLeft,
  FaChevronRight,
  FaCode,
  FaGithub,
  FaLink,
} from "react-icons/fa";
import Labels, { Label } from "../Labels";
import { PreviewImage } from "../Preview";
import { StyledStep } from "./index.styled";

export interface StepProps {
  at?: string;
  current?: boolean;
  descriptions: string[];
  duration: {
    from: string;
    to: string;
  };
  employment: string;
  image: string;
  link?: string;
  title: string;
  techstacks: string[];
  appLink?: string;
  githubLink?: string;
  type?: "experiences" | "projects";
}

function Step({
  at,
  employment,
  current,
  duration,
  link,
  type,
  image,
  title,
  techstacks,
  descriptions,
  appLink,
  githubLink,
}: StepProps) {
  // TODO: add show more feature
  // const [showMore, setShowMore] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  return (
    <StyledStep>
      <div className="right-arrow">
        <FaChevronRight />
      </div>
      <div className="right-icon icon">
        {type === "projects" && <FaCode />}
        {type === "experiences" && <FaBriefcase />}
      </div>
      <div className="left-arrow">
        <FaChevronLeft />
      </div>
      <div className="left-icon icon">
        {type === "projects" && <FaCode />}
        {type === "experiences" && <FaBriefcase />}
      </div>
      <div className={classnames("item-content")}>
        <small>
          <strong>{employment}</strong>
          &nbsp; &#8226; {duration.from} &nbsp; &#8594; &nbsp;
          {current ? "Current" : duration.to}
        </small>
        <div className="company-title">
          <img
            className={classnames(type === "projects" && "pointer")}
            src={image}
            onClick={type === "projects" ? () => setShowPreview(true) : null}
          />
          <div>
            <h3>
              {title}{" "}
              {at &&
                (link ? (
                  <>
                    at{" "}
                    <a href={link} target="_blank" rel="noreferrer noopener">
                      {at}
                    </a>
                  </>
                ) : (
                  `at ` + at
                ))}
            </h3>
            {(appLink || githubLink) && (
              <div className="project-links">
                <Labels>
                  {appLink && (
                    <Label hoverable>
                      <a
                        target="_blank"
                        href={appLink}
                        rel="noreferrer noopener"
                      >
                        <FaLink />
                        View App
                      </a>
                    </Label>
                  )}
                  {githubLink && (
                    <Label hoverable>
                      <a
                        target="_blank"
                        href={githubLink}
                        rel="noreferrer noopener"
                      >
                        <FaGithub />
                        View App
                      </a>
                    </Label>
                  )}
                </Labels>
              </div>
            )}
          </div>
        </div>

        {techstacks.length > 0 && (
          <div className="tech-stack">
            <Labels>
              {techstacks.map((label, i) => (
                <Label key={i}>{label}</Label>
              ))}
            </Labels>
          </div>
        )}
        <div className="descriptions">
          <ul>
            {descriptions.map((desc, i) => (
              <li key={i}>{desc}</li>
            ))}
          </ul>
        </div>
        {/* <div className="show-more-button">
          <p onClick={() => setShowMore(!showMore)}>
            Read {showMore ? "less" : "more"}
          </p>
        </div> */}
      </div>
      {showPreview && (
        <PreviewImage src={image} setShowImage={() => setShowPreview(false)} />
      )}
    </StyledStep>
  );
}

export default Step;
