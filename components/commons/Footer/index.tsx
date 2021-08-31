import { FaGithub, FaHackerrank, FaLinkedin } from "react-icons/fa";
import styled from "styled-components";
import { GITHUB, HACKERRANK, LINKEDIN, RESUME } from "../../../config";
import { mediaQuery } from "../../../helpers/style";
import { Wrapper } from "../Wrapper";

const FooterStyled = styled.footer`
  width: 100%;
  background-color: var(--color-bg);
  border-top: 1px solid var(--border-color);

  .footer-container {
    display: flex;
    gap: 30px;
    padding: 30px;

    .links-container {
      width: 200px;
      ul li {
        list-style: none;
        margin: 20px 0;
        > a {
          display: flex;
          align-items: center;
          > svg {
            margin-right: 10px;
          }

          &:hover {
            color: var(--font-color-active);
          }
        }
      }
    }
  }

  p {
    padding: 20px 30px;

    ${mediaQuery({ max: 425 })(`
      text-align: center;
      font-size:12px;
    `)}
  }
`;

export function Footer() {
  return (
    <FooterStyled>
      <Wrapper>
        <div className="footer-container">
          <div className="links-container">
            <h4>Socials</h4>
            <ul className="links">
              <li>
                <a href={HACKERRANK} target="_blank">
                  <FaHackerrank />
                  Hackerrank
                </a>
              </li>
              <li>
                <a href={LINKEDIN} target="_blank">
                  <FaLinkedin />
                  Linkedin
                </a>
              </li>
              <li>
                <a href={GITHUB} target="_blank">
                  <FaGithub />
                  Github
                </a>
              </li>
            </ul>
          </div>
          <div className="links-container">
            <h4>Useful Links</h4>
            <ul className="links">
              <li>
                <a href={RESUME} target="_blank">
                  Resume
                </a>
              </li>
              <li>
                <a href="mailto:fadil.ntksmh@gmail.com" target="_blank">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="copyright">
          Copyright <b>Muhammad Fadhilah Mulyana</b> &copy; 2021
        </p>
      </Wrapper>
    </FooterStyled>
  );
}
