
import styled from '@emotion/styled';

export const BtnFavorite = styled.button`
cursor: pointer;
border: none;
position: absolute;
top: 0;
right: 0;
background-color:inherit;
margin-top:14px;
margin-right:14px;
padding:0;
--color2: ${props => props.isFavorite?'#3470FF':'white'};
fill:${props => props.isFavorite?'#3470FF':'none'}; 


`
