import styled from "styled-components";
import { mediaQuery } from "../../../helpers/style";

export const StyledSteps = styled.div`
  margin: 20px auto;
  position: relative;
  min-height: 500px;
  height: 100%;
  max-width: 800px;
  padding: 0 30px;

  ${mediaQuery({ max: 650 })(`
    display:flex;
    flex-direction: column;
    gap: 15px;
    
    .timeline-line{
      display: none;
    }

    >div{
      .icon,.left-arrow,.right-arrow {
        display: none;
      }
      display:block;
      margin:0 !important;
      width: 100%;
    }
  `)}

  .timeline-line {
    position: absolute;
    width: 1px;
    left: 50%;
    background-color: var(--border-color);
    top: 20px;
    height: 100%;
  }
`;

export const StyledStep = styled.div`
  width: calc(50% - 40px);
  min-height: 100px;
  position: relative;
  display: inline-block;
  vertical-align: top;
  box-shadow: var(--box-shadow);
  border-radius: 10px;
  transition: 0.5s;
  border: 1px solid var(--border-color);
  border-top: 2px solid var(--border-color);
  margin-bottom: 50px;

  ${mediaQuery({ max: 750 })(`
    .item-content {
      .tech-stack, .descriptions {
        margin-left: 0 !important;
      }
      .descriptions {
        margin-left: 14px !important;
      }
    }
  `)}

  &:hover {
    box-shadow: var(--box-shadow-hover);
    border-color: var(--highlight-secondary);
  }

  &:last-child {
    margin-bottom: 60px;
  }

  &:nth-child(even) {
    .left-icon,
    .left-arrow {
      display: none;
    }
  }

  &:nth-child(odd) {
    margin-top: calc(20%);
    margin-left: 80px;

    .right-icon,
    .right-arrow {
      display: none;
    }
  }
  .left-icon {
    left: -54px;
  }
  .right-icon {
    right: -56px;
  }

  .icon {
    background-color: var(--color-bg);
    position: absolute;
    width: 30px;
    height: 30px;
    border: 1px solid var(--highlight-secondary);
    color: var(--highlight-secondary);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 8px;
  }
  .left-arrow {
    position: absolute;
    left: -20px;
    top: 15px;
  }
  .right-arrow {
    position: absolute;
    right: -20px;
    top: 15px;
  }

  .item-content {
    padding: 20px;

    .company-title {
      display: flex;
      gap: 8px;
      margin-top: 30px;
      img {
        width: 80px;
        height: 80px;
        object-fit: cover;
      }
      > div {
        h3 a {
          transition: 0.3s;
          color: var(--highlight-primary);
          :hover {
            color: var(--highlight-primary-light);
          }
        }
        .project-links {
          margin: 5px 0;
        }
      }
    }

    .tech-stack {
      margin: 10px 0;
      margin-left: 87px;
    }

    .descriptions {
      margin-left: 100px;
      ul {
        line-height: 24px;
        li {
          list-style: disc;
        }
      }
    }
    /* .show-more-button {
      position: absolute;
      user-select: none;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 50px 20px;
      background: linear-gradient(
        180deg,
        rgba(139, 167, 32, 0) 0%,
        var(--background-color) 60%
      );
      p {
        cursor: pointer;
      }
    } */
  }
`;
