import styled from '@emotion/styled';

export const Wrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px 29px;
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const WrapperButton = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
`;

export const TextButtun = styled.span`
  color: #3470ff;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  text-decoration-line: underline;
`;

export const SearchButton =styled.button`
width: 136px;
height:48px;
border-radius: 12px;
background-color:rgba(52, 112, 255, 1);
border:none;
font-size: 14px;
font-weight: 600;
line-height: 20px;
color:rgba(255, 255, 255, 1);

`

export const FilterDiv = styled.div`
    margin-top:40px;
    display:flex;
    gap: 18px;
    align-items: flex-end;
    justify-content: center;
`

export const NotFound = styled.div`
width: 400px;
height: 50px;
padding: 12px;
border-radius: 12px;
background-color: rgba(52, 112, 255, 70%);

font-size: 16px;
font-weight: 600;
line-height: 20px;
color:rgba(255, 255, 255, 1);
text-align:center;
align-items:center;

`

  