import styled from "styled-components";
import {AiOutlineInstagram, AiOutlineMail, AiOutlineMenu} from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Header(){
    
        const [isCollapsed, setIsCollapsed] = useState(true);
      
        const toggleMenu = () => {
          setIsCollapsed(!isCollapsed);
          
        };
    
    return(

        <HeaderContainer>
            <LeftContainer>
              <NavbarLink to="/"><h1>Stereolab</h1></NavbarLink>  
            </LeftContainer>
        <WrapperMenu>
        <AiOutlineMenu color="white" size="32"  onClick={toggleMenu} />
        </WrapperMenu>

        <CenterContainer>
            <Left isCollapsed={isCollapsed}>
                
                <NavbarLink to="/baffles"><li>Baffles</li></NavbarLink>
                <NavbarLink to="/cabos"><li>Cabos</li></NavbarLink>
                <NavbarLink to="/falante"><li>Falante</li></NavbarLink>
                <NavbarLink to=""><li>Residencial</li></NavbarLink>
                <NavbarLink to=""><li>Retrô</li></NavbarLink>
                <NavbarLink to=""><li>Tweeter</li></NavbarLink> 
                <NavbarLink to=""><li>Descontinuado</li></NavbarLink>
                <NavbarLink to=""><li>Compre aqui</li></NavbarLink>
                
            </Left>
            <Right>
                
                <NavbarLink to ="https://www.instagram.com/stereolab_oficial/"><AiOutlineInstagram color="white" size="24"/></NavbarLink>
                <NavbarLink to="https://www.tiktok.com/@stereolab_oficial?_t=8acESaVCw8U&_r=1"><FaTiktok color="white" size="18"/></NavbarLink>
                <MailButton onClick={() => window.location = 'mailto:contato@deaaz.net'}><AiOutlineMail color="white" size="24" /></MailButton>
                
            </Right>
       
        </CenterContainer>


        
        

        </HeaderContainer>
        

    )

}

const HeaderContainer = styled.div`
width: 100%;
height: 60px;
background-color: #4F5D75;
display: flex;
align-items: center;
font-family: 'Rubik', sans-serif;
font-size: 16px;
justify-content: space-evenly;
position: fixed;
z-index: 1;
@media screen and (max-width: 768px) {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
   
   
}

`
const WrapperMenu = styled.button`
background-color: transparent;
border: none;
cursor: pointer;
transition: background-color 0.2s ease-in-out;
position: absolute;
top: 50%;
right: 25px;
transform: translateY(-50%);
display: none;

@media screen and (max-width: 768px) {
    display: block;
   
}
`
const LeftContainer = styled.div`
/* width: 200px; */
text-decoration: none;
padding-left: 15px;
h1 {
    font-size: 25px;
    font-weight: 700;
   color: white;
}
@media screen and (max-width: 768px) {
    padding-left: 15px;
  
} 
`

const CenterContainer = styled.div`
display: flex;

`

const Left = styled.ul`
width: 800px;
display: flex;
align-items: center;
justify-content: space-around;
padding: 0;

li {
    color: white;
    list-style-type: none;
    margin: 0 1rem;
    text-decoration: none;
  display: block;
  width: 100%;
  :hover {
    color: #EF8354;
}
}

@media screen and (max-width: 768px){
    display: ${props => props.isCollapsed ? "none" : "block"};
    position: absolute;
    top: 60px;
    right: 0;
   // stacks the li tags vertically 
    flex-direction: column;
   // makes menu span full height and width
    width: 100%;
    height: calc(100vh - 200px);
    background-color: #D9D9D9;
   
li{
    text-align: center;
    margin: 0;
    margin-top: 10px;
} 
li a {
    color: black;
    // increases the surface area of the anchor tag to span the full width of the menu
    width: 100%;
    padding: 1.5rem 0;
}
    li:hover {
        background-color: #4F5D75;
        padding: 1.5rem 0;
        
    }
}

`

const Right = styled.div`
width: 150px;
display: flex;
justify-content: space-evenly;
align-items: center;
margin-right: 15px;
p{ 
    color: white;
}
@media screen and (max-width: 768px){
display: none;
}
`

const NavbarLink = styled(Link)`
text-decoration: none;

`
const MailButton = styled.button`
background-color: transparent;
border: 1px solid #4F5D75;
cursor: pointer;

`