import styled from "styled-components";
import {AiOutlineInstagram, AiOutlineMail} from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";


export default function Icons() {
    return (
            <Right>
                
                <NavbarLink to ="https://www.instagram.com/stereolab_oficial/"><AiOutlineInstagram color="white" size="24"/></NavbarLink>
                <NavbarLink to="https://www.tiktok.com/@stereolab_oficial?_t=8acESaVCw8U&_r=1"><FaTiktok color="white" size="18"/></NavbarLink>
                <MailButton onClick={() => window.location = 'mailto:contato@deaaz.net'}><AiOutlineMail color="white" size="24" /></MailButton>
                
            </Right>
    )
}

const Right = styled.div`
width: 200px;
display: flex;
justify-content: space-evenly;
align-items: center;
margin-bottom: 10px;
position: fixed;
bottom: 0;
right: 0;
p{ 
    color: white;
}

@media screen and (min-width: 768px){
justify-content: space-between;
display: none;
}
`

const MailButton = styled.button`
background-color: transparent;
border: 1px solid #C4C4C4;
cursor: pointer;

`

const NavbarLink = styled(Link)`
text-decoration: none;

`
