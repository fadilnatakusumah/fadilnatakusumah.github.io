import { Layout } from "../components/Layout";
import { AppContextType } from "next/dist/next-server/lib/utils";
import { MobileProjects, ProjectProps } from "../lib/projects";
import { Wrapper } from "../components/Wrapper";
import { Card } from "../components/Card";

interface MobilePageProps {
  projects: ProjectProps[]
}

export default function MobilePage({ projects }: MobilePageProps): JSX.Element {
  return (
    <Layout
      pageId={"mobile"}
      title="Mobile App Projects"
      description="All the web projects that has been done"
    >
      <Wrapper>
        <h2 className="title">Mobile App Projects</h2>
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


MobilePage.getInitialProps = (ctx: AppContextType) => {
  return {
    projects: MobileProjects
  }
}