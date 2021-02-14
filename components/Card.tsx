import React, { useState } from 'react'
import styled from 'styled-components';
import Image from "next/image";
import { FaCode, FaGlobe, FaLock } from "react-icons/fa";
import { IoMdDocument } from "react-icons/io";

import { ProjectProps } from '../lib/projects';

interface CardProps {
  project: ProjectProps,
  children?: any,
}

const CardStyled = styled.div`
  padding: 16px;
  border: 1px solid var(--border-color);
  margin-bottom: 30px;
  display: flex;
  transition: .5s;

  @media(max-width: 800px){
    flex-direction: column;

    .project-description{
      padding: 20px 0 !important;
    }

  }

  &:hover{
    box-shadow: var(--box-shadow);
  }

  .image-thumbnail{
    transition: .5s ease-out;
    object-fit: cover;
    max-height: 200px !important;
    cursor: pointer;
    
    &:hover{
      transform: scale(1.1);
    }
  }

  .project-description{
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .text-content{
      >div strong, h3{
        color: var(--font-color-active);
      }

      &__tech-stacks{
        margin: 20px 0;
      }
    }
  
    .buttons{
      display: flex;
      gap:10px;
      
      button {
        cursor: not-allowed;
      }

      a, button {
        display: flex;
        align-items: center;
        padding: 6px 20px;
        border: 1px solid var(--font-color);
        background-color: var(--background-color);
        color: var(--font-color);
        font-size: 16px;
        
        >span{
          margin-left: 15px;
          svg{
            height: 12px !important;
          }
        }

        &:hover{
          border: 1px solid var(--font-color-active);
          color: var(--font-color-active);
        }
      }
    }
  }
`

export function Card({ project }: CardProps) {
  const [showImage, setShowImage] = useState('');

  return (
    <>
      {showImage && <PreviewImage image={showImage} setShowImage={setShowImage} />}
      <CardStyled>
        {project.image.startsWith("http")
          ? <img
            className="image-thumbnail"
            src={project.image}
            alt={project.title}
            width={300}
            height={160}
            onClick={() => setShowImage(project.image)}
          />
          :
          <Image
            className="image-thumbnail"
            src={project.image}
            alt={project.title}
            width={300}
            height={160}
            onClick={() => setShowImage(project.image)}
          />}
        <div className="project-description">
          <div className="text-content">
            <h3>
              {project.title}
            </h3>
            <div>{project.description}</div>
            <div className="text-content__tech-stacks">
              <span>
                <strong>Tech Stacks</strong> | {project.stacks.join(', ')}
              </span>
            </div>
          </div>

          <div className="buttons">
            {project.docs && <a href={project.docs} target="_blank">Docs <span><IoMdDocument /></span></a>}
            {project.url && <a href={project.url} target="_blank">Site <span><FaGlobe /></span></a>}
            {
              project.private
                ?
                <button disabled>
                  Code <span><FaLock /></span>
                </button>
                :
                project.repo && <a href={project.repo} target="_blank">
                  Code <span><FaCode /></span>
                </a>}
          </div>
        </div>
      </CardStyled>
    </>
  )
}


const PreviewImage = ({ image, setShowImage }) => {
  return (
    <PreviewImageStyled onClick={() => setShowImage('')}>
      <div className="centered-content">
        <img src={image} />
      </div>
    </PreviewImageStyled>
  )
}

const PreviewImageStyled = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,.5);
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  >div.centered-content{
    height: 80vh;
    z-index: 15;
    max-width: 95vw;

    >img{
      height: 100%;
      object-fit: contain;
      width: 100%;
    }
  }
`
