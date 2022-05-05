import React from 'react';
import styled  from 'styled-components';


const Loading = () => {
  return (
    <Container>
          <img src={'./img/spinner.gif'} alt="" />
    </Container>
  )
}

export default Loading;

const Container = styled.div`
width:100%;
display:flex;
justify-content:center;
align-items:center;
text-align:center;
& img{
    width: 100%;
    max-width: 120px;
    opacity: .9;
}

`
