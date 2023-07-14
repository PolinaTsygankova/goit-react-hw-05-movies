import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  margin-bottom: 27px;
  background-color: rgb(202, 105, 105);
  height: 60px;
  display: flex;
  align-items: center;
  padding-left: 50px;
  justify-content: flex-start;
`;

export const Link = styled(NavLink)`
  color: black;
  text-decoration: none;
  font-size: 22px;
  margin-right: 50px;
  &.active {
    font-size: 24px;
    color: white;
    text-shadow: 5px 2px 9px rgba(255, 97, 97, 1);
  }
`;
