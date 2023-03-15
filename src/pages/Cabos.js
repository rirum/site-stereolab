import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";


export default function Cabos(){
    return(

        <>
        <Header/>

        <WrapperMain>
                <ContainerLeft><h1>Cabos<span>.</span></h1>
                    <WrapperParagraph><p>O que você precisa hoje?</p></WrapperParagraph>
                </ContainerLeft>

                <ContainerRight>
                    <WrapperImageTop>
                        <TextContainer>
                            <h2>Cabo para</h2>
                            <h1>Falante</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                                 ex ea commodo consequat.</p>
                        </TextContainer>

                        <ImageContainer>

                        </ImageContainer>
                    </WrapperImageTop>

                    <WrapperImage>.</WrapperImage>
                    
                </ContainerRight>
        </WrapperMain>
        <Footer/>
        </>
        
    )
}


const WrapperMain = styled.div`
height: 100vh;
display: flex;
align-items: center;
background-color: #EDF2F4;
padding-top: 60px;
@media (max-width: 768px){
    display: flex;
    flex-direction: column;
}
`

const ContainerLeft = styled.div`
background-color: #fff;
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
    font-size: 15px;
    padding-left: 120px;
    
    @media (max-width: 768px) {
        align-items: center;
        font-size: 14px;
        padding-left: 0px;

    }
}
`
const WrapperParagraph = styled.div`
width: 500px;
word-wrap: break-word;
@media (max-width: 768px) {
    width: 300px;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
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

const WrapperImageTop = styled.div`
display: flex;
flex-direction: column;
margin-top: 140px;
width: 90%;
height: 45%;
@media screen and (max-width: 768px) {
    margin-top: 20px;
}
`
const WrapperImage = styled.div`
display: flex;
flex-direction: column;
background-color: red;
margin-top: 50px;
width: 90%;
height: 45%;
margin-bottom: 100px;
@media screen and (max-width: 768px) {
    margin-bottom: 80px;
}
`
const TextContainer = styled.div`
width: 400px;
h1{
font-size: 150px;
font-family: 'Bebas Neue', sans-serif;
line-height: 120px;
}
h2{
    font-size: 50px;
    font-family: 'Bebas Neue', sans-serif;
}
p{
    font-family: 'Rubik', sans-serif;
    font-size: 18px;
}
`
const ImageContainer = styled.div`
width:400px;
height: 350px;
background-color: pink;
`