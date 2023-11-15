import styled from '@emotion/styled';


export const FilterDiv = styled.div`
    margin-top:40px;
    display:flex;
    gap: 18px;
    align-items: flex-end;
    justify-content: center;
`

export const SearchDiv = styled.div`
    display: flex;
    flex-direction: column;
`

export const LabelSelect = styled.p`
color:rgba(138, 138, 137, 1);
font-family: Manrope;
font-size: 14px;
font-weight: 500;
line-height: 18px;
letter-spacing: 0em;
text-align: left;
margin-bottom:8px;
`

export const SelectPrice = styled.span`
width: 125px;
/* height: 48px; */
padding: 14px;
border-radius: 14px;
background-color:rgba(247, 247, 251, 1);
font-family: Manrope;
font-size: 18px;
font-weight: 500;
line-height: 20px;
letter-spacing: 0em;
text-align: left;
gap:8px;

`

export const Price = styled.select`
   margin-left:29px;
   border:none;
font-family: Manrope;
font-size: 16px;
font-weight: 500;
line-height: 20px;
background-color:rgba(247, 247, 251, 1);


   option {
width: 125px;
height: 188px;
padding: 14px;
border-radius: 14px;
border: 1px solid rgba(18, 20, 23, 0.05);
color:rgba(18, 20, 23, 0.2)
}
`

export const MileageSearch = styled.div`
display:flex;
width: 320px;
padding: 14px;
border:none;
border-radius: 14px;
background-color:rgba(247, 247, 251, 1);
font-family: Manrope;
font-size: 18px;
font-weight: 500;
line-height: 20px;
letter-spacing: 0em;
text-align: left;

input{
    width:120px;
    border:none;
    background-color:rgba(247, 247, 251, 1);
    margin-left:8px;
}

`

