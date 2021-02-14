import Nprogress from "nprogress";
import Router from "next/router";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";

import { Link } from "../components/Link";
import { pageId } from "../lib/page";
import { ToggleTheme } from "./ToggleTheme";
import { createRef } from "react";
import { RESUME } from "../config";

export interface HeaderProps {
  pageId: pageId,
  children: JSX.Element | JSX.Element[]
}

(Router as any).onRouteChangeStart = (url: string) => Nprogress.start();
(Router as any).onRouteChangeComplete = (url: string) => Nprogress.done();
(Router as any).onRouteChangeError = (url: string) => Nprogress.done();

const HeaderStyled = styled.header`
  width: 100%;
  margin: 0 auto;
  h1 {
    font-size: 36px;
    text-align: center;
    padding: 50px;
    white-space: nowrap;
    color: var(--font-color-active);

    @media(max-width: 800px){
      padding: 30px;
    }

    @media(max-width: 500px){
      font-size: 25px;
      padding: 20px;
      white-space: pre-wrap;
    }
  }

  nav {
    display: flex;
    align-items: center;
    max-width: 100%;
    margin: auto;
    justify-content: center;
  }

  ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
    gap: 15px;
    flex-wrap: wrap;

    li a{
      padding: 10px 15px;
      cursor: pointer;
      transition: .3s ease-in-out;
      white-space: nowrap;

      &:hover{
        background-color: var(--font-color);
        color: var(--background-color);
      }

      &.active{
        border-bottom: 2px solid var(--font-color-active);
        color: var(--font-color-active);
      }
    }
  }

  .menu-icon {
    display: none;
  }

  @media (max-width: 800px) {
    .hidden{
      display: none;
    }
    .menu-icon{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px;
      font-size: 20px;
      border-top: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
      >svg{
        cursor: pointer;
        &:hover{
          fill: var(--font-color-active);
        }
      }
    }

    nav{
      justify-content: flex-start;
      border-bottom: 1px solid #ccc;
    }

    .toggleButton{
      display: none;
    }

    ul {
      display: block;
      li{
        display: block;

        a{
          margin: 5px 0;
          padding-top: 0;
          padding-bottom: 0;
          display: inline-block;

          &:hover{
            background-color: transparent !important;
            color: var(--font-color-active);
            font-weight: 700;
          }
          &.active {
            color: var(--font-color-active);
            font-weight: 700;
            border: none;
          }
        }
      }
    }
  }
`

export function Header({ pageId }) {
  const navRef = createRef<HTMLElement>();
  const onClickMenuHandler = () => {
    // const currentDisplay = navRef.current.style.display;
    navRef.current.classList.toggle("hidden");
  }

  return (
    <HeaderStyled>
      <h1>Muhammad Fadhilah Mulyana</h1>
      <div className="menu-icon">
        <GiHamburgerMenu onClick={onClickMenuHandler} />
        <ToggleTheme />
      </div>
      <nav ref={navRef} className="hidden">
        <ul>
          <Link active={pageId === 'web'} href='/'>
            Web Development
          </Link>
          <Link active={pageId === 'mobile'} href='/mobile'>
            Mobile Development
          </Link>
          <Link
            active={pageId === 'about'}
            href='/about'
          >
            About Me
          </Link>
          <Link
            active={pageId === 'contact'}
            href='mailto:fadil.ntksmh@gmail.com'
          >
            Contact
          </Link>
          <li>
            <a target="_blank" href={RESUME}>
              Resume
            </a>
          </li>
        </ul>
        <ToggleTheme className="toggleButton" />
      </nav>
    </HeaderStyled>
  )
}
