import styled from "styled-components";
import { mediaQuery } from "../../../helpers/style";

const StyledProfile = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  .image-profile {
    border-radius: var(--border-radius);
    padding: 8px 12px;
    margin: 25px;
    box-shadow: var(--box-shadow);

    &__img {
      border-radius: var(--border-radius);
    }
  }

  .name {
    margin-bottom: 12px;
  }

  .title {
    text-align: center;
    font-size: 20px;
    font-weight: normal;
  }

  .info {
    margin: 5px 0;
    font-size: 14px;
  }

  .links {
    display: flex;
    gap: 15px;
    align-items: center;
    font-size: 15px;
    > li {
      padding: 10px;
    }
    > li,
    > li a {
      display: flex;
      transition: 0.5s;
      align-items: center;
      gap: 5px;
    }

    > li a:hover {
      color: var(--highlight-primary-light);
    }

    > li:last-child {
      color: var(--highlight-secondary);
    }
  }

  ${mediaQuery({ max: 650 })(`
    .name {
      font-size: 18px;
      margin-bottom: 5px;
    }

    .title {
      font-size: 17px;
    }

    .links {
      flex-direction: column;
      gap: 0;
      font-size: 14px;
      margin: 10px;

      >li {
        padding: 3px;
      }
    }
    .
  `)}

  .tech-stack {
    padding: 0 15px;
    text-align: center;
    h4 {
      margin-bottom: 5px;
    }
    ul {
      justify-content: center;
    }
  }
`;

export default StyledProfile;
