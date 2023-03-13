import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import teste from "../img/teste.png";
export default function Home(){
    return(
        <>
        <Header/>

        <WrapperMain>
                <ContainerLeft><h1>Stereolab<span>.</span></h1>
               <p>desde 2005.</p>
                </ContainerLeft>
                <ContainerRight><img src={teste} alt="teste"/></ContainerRight>
        </WrapperMain>
        <Footer/>
        </>
        
    )
}

const WrapperMain = styled.div`
height: 100vh;
display: flex;
align-items: center;
background-color: #333333;
padding-top: 60px;
@media (max-width: 768px){
    display: flex;
    flex-direction: column;
}
`

const ContainerLeft = styled.div`
background-color: #EDF2F4;
height: 100%;
width: 40%;
display: flex;
flex-direction: column;
align-items: flex-start;
@media (max-width: 768px) {
    width: 100%;
    height: 60%;
    align-items: center;
    justify-content: center;
    padding-top: 10px;
}
h1{
    color: black;
    font-family: 'Bebas Neue', sans-serif;
    font-weight: 700;
    font-size: 106px; 
    padding-left: 120px;
    padding-top: 300px;
    @media screen and (max-width: 768px){
        align-items: center;
        font-size: 60px;
        padding-left: 0px;
        padding-top: 1px;
    }
}
span {
    font-family: 'Bebas Neue', sans-serif;
    color:#EF8354;
    font-size: 180px;
    @media screen and (max-width: 768px) {
        font-size: 60px;
    }
}
p{
    color: black;
    font-family: 'Rubik', sans-serif;
    font-weight: 300;
    font-size: 20px;
    padding-left: 144px;
    
    @media (max-width: 768px) {
        align-items: center;
        font-size: 20px;
        padding-left: 0px;

    }
}
`

const ContainerRight = styled.div`
height: 100%;
width: 60%;
display: flex;
flex-direction: column;
align-items: center;
overflow: hidden;

img {
    max-width: auto;
    max-height: 100%;
    
   
}
@media (max-width: 768px){
   width: 100%;
}
`