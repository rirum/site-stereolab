import styled from "styled-components";
import {AiOutlineInstagram, AiOutlineMail, AiOutlineMenu} from "react-icons/ai";
import { useState } from "react";

export default function Header(){
    
        const [isCollapsed, setIsCollapsed] = useState(true);
      
        const toggleMenu = () => {
          setIsCollapsed(!isCollapsed);
          console.log("clicou")
        };
    
    return(

        <HeaderContainer>
        <LeftContainer><h1>Stereolab</h1></LeftContainer>
        <WrapperMenu>
        <AiOutlineMenu color="white" size="32"  onClick={toggleMenu} />
        </WrapperMenu>

        <CenterContainer>
            <Left isCollapsed={isCollapsed}>
                
                <li>Baffles</li>
                <li>Cabos</li>
                <li>Falante</li>
                <li>Retrô</li>
                <li>Tweeter</li> 
                <li>Revendas</li>
                <li>Descontinuado</li>
                <li>Compre aqui</li>
                
            </Left>
            <Right>
                
                <AiOutlineInstagram color="white" size="24"/>
                <AiOutlineMail color="white" size="24"/>
            
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
justify-content: space-between;
position: relative;


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
/* width: 150px; */
text-decoration: none;
padding-left: 15px;
h1 {
    font-weight: 700;
   color: white;
}
@media screen and (max-width: 768px) {
    padding-left: 15px;
  
} 
`

const CenterContainer = styled.div`
display: flex;

@media screen and (max-width: 768px) {   
    
}

`

const Left = styled.ul`
width: 1200px;
display: flex;
align-items: center;
justify-content: space-evenly;
padding: 0;

li {
    color: white;
    list-style-type: none;
    margin: 0 1rem;
    text-decoration: none;
  display: block;
  width: 100%;
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
width: 300px;
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