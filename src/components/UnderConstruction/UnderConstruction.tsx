import React from 'react'
import styled, { keyframes } from 'styled-components'
import { FcSettings } from "react-icons/fc";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import memoji from '../../media/memoji.png'


const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const iconAnimated = keyframes`
    0%
    {
        transform: scale( .75 );
    }
    50%
    {
        transform: scale( 1.1 );
    }
    100%
    {
        transform: scale( .75 );
    }
`;

const Rotate = styled.div`
    animation: ${rotate} 3s linear infinite;
    margin: 30px;
`;

const Memoji = styled.img`
    height: 150px;
    @media (max-width: 768px){
        height: 100px;
    }
`;

const Text = styled.p`
    font-family: 'Source Code Pro', monospace;
    color: rgb(227, 200, 148);
    font-size: 20px;
`;

const Title = styled.h1`
    font-family: 'Source Code Pro', monospace;
    color: #a7daf9;
    text-align: center;
    font-size: 40px;
    background-color: rgba(255, 255, 255, 0.1);
    width: 30rem;
    padding: 20px;
    margin: 15px;
    border-radius: 8px;
    @media (max-width: 768px){
        width: 15rem;
        font-size: 20px;
    }
`;

const AnimatedIcon = styled(FcSettings)`
    font-size: 4rem;
`;

const MediaIconsWrapper = styled.div`
    display: flex;
    height: 80px;
    width: 180px;
    justify-content: center;
    align-items: center;
`;

const Link = styled.a``;

const Github = styled(FiGithub)`
    color: #ffffff;
    font-size: 40px;
    &:hover {
        color: #80cf98;
    }
    padding: 0 10px 0 10px;
    animation: ${iconAnimated} 10s infinite;
`;

const Linkedin = styled(FiLinkedin)`
    color: #ffffff;
    font-size: 40px;
    &:hover {
        color: #80cf98;
    }
    padding: 0 10px 0 10px;
    animation: ${iconAnimated} 10s infinite;
`;

const UnderConstruction: React.FC = (props) => {
  return (
    <>
        <Memoji src={memoji}/>
        <Text>miguel_gnz</Text>
        <Title>WEBSITE UNDER DEVELOPMENT</Title>
        <Rotate>
            <AnimatedIcon />
        </Rotate>
        <MediaIconsWrapper>
            <Link href='https://github.com/miguelgnz' target={'_blank'} >
                <Github />
            </Link>
            <Link href='https://www.linkedin.com/in/miguel-gnz/' target={'_blank'} rel={'noreferrer'}>
                <Linkedin />
            </Link>
        </MediaIconsWrapper>
    </>
)
}

export default UnderConstruction