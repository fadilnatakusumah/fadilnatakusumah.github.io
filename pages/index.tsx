import { Layout } from "../components/Layout";
import { AppContextType } from "next/dist/next-server/lib/utils";

import { ProjectProps, WebProjects } from "../lib/projects";
import { Wrapper } from "../components/Wrapper";
import { Card } from "../components/Card";

interface HomePageProps {
  projects: ProjectProps[]
}

export default function HomePage({ projects }: HomePageProps): JSX.Element {
  return (
    <Layout
      pageId={"web"}
      title="Web Projects"
      description="All the web projects that has been done"
    >
      <Wrapper>
        <h2 className="title">Web Projects</h2>
        <div className="card-container">
          {projects.map((project, i) => (
            <Card project={project} key={i} />
          ))}
        </div>
        <style jsx>
          {`
            h2.title {
              text-align: center;
              margin: 15px 0;
            }

            .card-container{
              padding: 30px 0;
            }
          `}
        </style>
      </Wrapper>
    </Layout>
  )
}


HomePage.getInitialProps = (ctx: AppContextType) => {
  return {
    projects: WebProjects
  }
}