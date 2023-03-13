import styled from "styled-components";
import IconsMobile from "./IconsMobile";

export default function Footer(){
    return(
        <>
            <StyledFooter><p>Stereolab</p></StyledFooter>
            <IconsMobile/>
        </>
        
    )
}

const StyledFooter = styled.div`
width: 100%;
height: 50px;
position: fixed;
bottom: 0;
left: 0;
background-color: #C4C4C4;
font-family: 'Rubik', sans-serif;
display: flex;
align-items: center;

p{
    color: white;
    margin-left: 150px;
    
}
@media screen and (max-width: 768px) {
   p{
    margin-left: 20px;
   }
  
}
`

