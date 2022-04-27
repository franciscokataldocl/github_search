import React from 'react';
import styled  from 'styled-components';
import SearchForm from '../form/SearchForm';
import { motion } from 'framer-motion';



const Header = () => {
  return (
    <Container
      as={motion.div}
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={{
        backgroundImage: `url("./img/background.jpg")`,
      }}
    >
      {/* <Image src="./img/logo.png" alt="github-logo" /> */}
      <SearchForm />
    </Container>
  );
}

export default Header;

const Container = styled.div`
  width: 100%;
  height: 300px;
  margin: 0 auto;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-repeat:no-repeat;
  background-position:center center;
  position:relative;
  display:flex;
  justify-content: center;
  align-items: center;

  &:after{
      content: '';
      position:absolute;
      width:100%;
      height:100%;
      top:0;
      left:0;
      background:var(--black);
      z-index:0;
      opacity: .8;
  }
`;
