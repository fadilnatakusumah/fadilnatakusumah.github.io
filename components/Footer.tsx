import { FaGithub, FaHackerrank, FaLinkedin } from "react-icons/fa";
import styled from "styled-components";

import { RESUME } from "../config";
import { Wrapper } from "./Wrapper";

const FooterStyled = styled.footer`
  width: 100%;
  background-color: var(--background-color);
  border-top: 1px solid var(--font-color);
  padding: 20px 0 30px;

  .container{
    display: flex;
    gap:30px;

    .links-container{
      width: 200px;
      ul li {
        list-style: none;
        margin: 20px 0;
        >a{
          display: flex;
          align-items: center;
          >svg {
            margin-right: 10px;
          }

          &:hover{
            color: var(--font-color-active);
          }
        }
      }
    }
  }

  p{
    margin-top: 20px;
  }
`

export function Footer() {
  return (
    <FooterStyled>
      <Wrapper>
        <div className="container">
          <div className="links-container">
            <h4>Socials</h4>
            <ul className="links">
              <li>
                <a href="https://www.hackerrank.com/fadil_ntksmh" target="_blank">
                  <FaHackerrank />
                    Hackerrank
                  </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/muhammad-fadhilah-mulyana" target="_blank">
                  <FaLinkedin />
                    Linkedin
                  </a>
              </li>
              <li>
                <a href="https://github.com/fadilnatakusumah" target="_blank">
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
        <p>
          Copyright <b>Muhammad Fadhilah Mulyana</b> &copy; 2021
        </p>
      </Wrapper >
    </FooterStyled >
  )
}

