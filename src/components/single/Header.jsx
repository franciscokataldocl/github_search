import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';



const Header = ({image, name}) => {
  return (
    <HeaderBox
      as={motion.div}
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: .5 }}
    >
      <ImageBox>
        <img src={image} alt="" />
      </ImageBox>
      <Title>{name}</Title>
    </HeaderBox>
  );
}

export default Header;

const HeaderBox = styled.div`
  width: 100%;
  position: relative;
  height: 330px;
  @media (max-width: 768px) {
    height:280px;
  }
`;

const ImageBox = styled.div`
  border-radius: 1000px;
  overflow: hidden;
  width: 250px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: var(--grey-1) 0px 8px 24px;
  background: var(--white);
  position: absolute;
  left: 50%;
  transform: translate(-50%, 20%);
  & img {
    width: 250px;
    height: 250px;
  }
  @media (max-width: 768px) {
    width: 150px;
  height: 150px;
  transform: translate(-50%, 50%);
  }
`;

const Title = styled.h1`
  font-size: 10rem;
  font-weight: 700;
  color: var(--white);
  text-align: center;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 70%);
  z-index: -1;
  @media (max-width: 768px) {
    font-size:2rem;
    transform: translate(-50%, 230px);
  }
`;