import Image from "next/image";
import {
  FaBookOpen,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { GITHUB, LINKEDIN, RESUME } from "../../../config";
import Labels, { Label } from "../../commons/Labels";
import StyledProfile from "./index.styled";

export default function Profile() {
  return (
    <StyledProfile>
      <div className="image-profile">
        <Image
          className="image-profile__img"
          src={`/assets/images/profile-photo.jpg`}
          alt="me - fadilnatakusumah"
          width="130"
          height="130"
        />
      </div>

      <h1 className="name">Muhammad Fadhilah Mulyana</h1>
      <h2 className="title">Software Engineer</h2>
      <div className="info">
        &#8226; fadil.ntksmh@gmail.com &#8226;
        {/* <small>
        </small> */}
        {/* <strong>Bachelor of Computer (Informatics)</strong> -{" "}
        <span>Universitas Islam Indonesia</span> */}
      </div>
      <ul className="links">
        <li title="Location - Yogyakarta, Indonesia">
          <FaMapMarkerAlt />
          <span>Yogyakarta, Indonesia</span>
        </li>
        <li title="Linkedin - Muhammad Fadhilah Mulyana">
          <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
            <span>Linkedin</span>
          </a>
        </li>
        <li title="Github - fadilnatakusumah">
          <a href={GITHUB} target="_blank" rel="noopener noreferrer">
            <FaGithub />
            <span>Github</span>
          </a>
        </li>
        <li title="Resume - fadilnatakusumah">
          <a href={RESUME} target="_blank" rel="noopener noreferrer">
            <FaBookOpen />
            <span>Resume</span>
          </a>
        </li>
      </ul>

      <div className="tech-stack">
        <h4>I work with:</h4>
        <Labels>
          <Label>Typescript</Label>
          <Label>Javascript</Label>
          <Label>React</Label>
          <Label>Graphql</Label>
          <Label>NodeJS</Label>
          <Label>Flutter</Label>
          <Label>Vue</Label>
        </Labels>
      </div>
    </StyledProfile>
  );
}
