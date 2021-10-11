import React from 'react';
import styled from 'styled-components';
export const NavbarWrapper= styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 100%;
  overflow: hidden;
  background-color: #333;
      li{
            float:right;
      }
      li a{
            display: inline;
            text-decoration:none;
            padding : 20px;
            float: right;
            color: white;
            text-transform: uppercase;
      }

`;
export const Logo = styled.li`
      float: left;
      a {
            display: inline;
            text-decoration:none;
            padding : 24px;
          
            color: white;
            text-transform: uppercase;  
      }
`;