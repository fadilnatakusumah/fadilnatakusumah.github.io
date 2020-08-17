import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import styled from 'styled-components'
function Header() {
  return (
    <div>
      <NavStyled>
        <NavLink to="/" key="/">
          About Me
        </NavLink>
        <NavLink to="/projects" key="/projects">
          Projects
        </NavLink>
        <NavLink to="/contacts" key="/contacts">
          Contacts
        </NavLink>
        {/* <NavLink to="/contacts">
          About Me
        </NavLink> */}
      </NavStyled>
    </div>
  )
}

const NavStyled = styled.div`
    text-align: center;
    display: flex;
    justify-content: center;
    padding: 15px

    >a{
      white-space: nowrap;
      font-weight: 600;
      padding: 2px 15px;
      text-decoration: none;
      color:white;
      display: flex;
      justify-content: center;
      transition: .5s;
      border-radius: 8px;
      border: 1px solid none;
      margin:0 15px;

      &:hover{
        transition: .5s;
        background:white;
        color: purple;
      }

      @media (max-width: 700px){
        font-size: 12px;
      }
    }
  `
export default Header
