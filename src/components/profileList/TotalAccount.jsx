import React from 'react';
import styled  from 'styled-components';


const TotalAccount = ({totalAccount}) => {
  return (
    <Totals>Cantidad de resultados: {totalAccount}</Totals>
  )
}

export default TotalAccount;

const Totals = styled.div`
width:100%;
text-align:center;
font-size: 1.3rem;
    color: white;
    padding: 5% 0;

`