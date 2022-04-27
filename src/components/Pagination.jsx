import React from 'react';
import styled  from 'styled-components';


const Pagination = ({ profilesPerpage, totalProfiles, paginate }) => {

    const pageNumbers = [];
    for (let i = 1; i < Math.ceil(totalProfiles / profilesPerpage); i++) {
        pageNumbers.push(i)
    }




  return (
    <Container>
      <PaginationList>
        {pageNumbers.map((number) => (
          <li key={number} onClick={() => paginate(number)}>
            {number}
          </li>
        ))}
      </PaginationList>
    </Container>
  );
}

export default Pagination;

const Container = styled.div`
width:100%;
height:100%;
padding: 3% 0;
display:flex;
justify-content: center;
align-items: center;
`
const PaginationList = styled.div`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  & li {
    background: var(--blue);
    color:var(--white);
    font-weight: 400;
    font-size:1.1rem;
    padding: 15px;
    width:20px;
    height:20px;
    display:flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    margin: 3px;
    &:hover {
      cursor: pointer;
      opacity: 0.5;
    }


  }
`;