import styled from "styled-components";

import { Layout } from "../components/Layout";
import { Wrapper } from "../components/Wrapper";

const AboutMeStyled = styled.section`
  max-width: 690px;
  margin: 20px auto;

  >h1{
    font-size: 30px;
    margin-bottom: 10px;
  }

  .paragraph{
    margin: 15px 0;
    font-size: 1.3rem;

    strong{
      color: var(--font-color-active);
    }
  }
`

export default function AboutMePage(): JSX.Element {
  return (
    <Layout
      pageId={"about"}
      title="About Me"
      description="Information of Muhammad Fadhilah Mulyana"
    >
      <Wrapper>
        <AboutMeStyled>
          <h1>Hi, I'm Muhammad Fadhilah Mulyana</h1>
          <h3>You can call me Fadil</h3>
          <p className="paragraph">
            I'm a web developer, mostly work in front-end parts with React. I always try to keep learning about mobile development, other front-end frameworks and other things that interested me.
          </p>
          <p className="paragraph">
            I also like doing sports such as Basketball or some basic aerobic exercise.
          </p>
          <p className="paragraph">Currently I'm based in Yogyakarta City, Indonesia.</p>
          <p className="paragraph">Feel free to contact me at <strong>fadil.ntksmh@gmail.com</strong></p>
        </AboutMeStyled>
      </Wrapper>
    </Layout>
  )
}
