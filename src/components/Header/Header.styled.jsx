import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
padding: 20px;
border: 1px solid black;
background-color:#f6f6fa;
display:flex;
justify-content: space-evenly;
`
export const NavigateTo = styled(Link)`
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: rgba(52, 112, 255, 1);
  cursor: pointer;
  flex-shrink: 0;
  font-family: 'Manrope',
    sans-serif;
  font-size: 16px;
  font-weight: 500;
  height: 40px;
  width: 150px;
  padding: 7px;
  text-align: center;
  text-shadow: rgba(0, 0, 0, 0.25) 0 3px 8px;
  transition: all 0.5s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  :hover {
  box-shadow: rgba(80, 63, 205, 0.5) 0 1px 30px;
  transition-duration: 0.1s;
}
`
