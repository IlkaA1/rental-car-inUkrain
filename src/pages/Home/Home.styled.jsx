import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.div`
max-width: 1600px;
padding:100px;
background-color: #09366d;
font-family: Manrope;
font-size: 44px;
font-weight: 900;
line-height: 60px;
letter-spacing: 0.06em;
text-align: center;
color:white;
`
export const Center = styled.div`
   display:flex;
   justify-content: space-evenly;
   width:100%;
`
export const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    
  
 span{
    margin-right:200px;
  
 }
`
export const ForRent = styled.div`
    width:500px;
    border: 5px solid #09366d;
    border-radius: 10px;
    padding:10px;
    background-color:#f6f6fa;
    margin-bottom:20px;
    margin-top:30px;
   
    
    h2{
font-family: Manrope;
font-size: 24px;
font-weight: 700;
line-height: 60px;
color: rgba(52, 112, 255, 1);
    }
`

export const NavigateToRent = styled(Link)`
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: white;
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
  background-color:#09366d;
  
  :hover {
  box-shadow: rgba(80, 63, 205, 0.5) 0 1px 30px;
  transition-duration: 0.1s;
}
`
