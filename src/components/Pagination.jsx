import React from 'react';
import ReactPaginate from 'react-paginate';
import styled  from 'styled-components';



const Pagination = ({ totalProfiles, profilesPerpage, paginate }) => {

    const PageCount = Math.ceil(totalProfiles / profilesPerpage);
    console.log(totalProfiles)
 

    const ChangePage = ({ selected }) => {
        paginate(selected +1)
      };
 
  return (
   <>
   {totalProfiles > 0 &&  <Container>

<ReactPaginate
    previousLabel={"Anterior"}
    nextLabel={"Siguiente"}
    pageCount={PageCount}
    onPageChange={ChangePage}
    containerClassName={"PaginationList"}
    activeClassName={"paginationActive"}
 
  ></ReactPaginate>

    </Container>}</>
   
   
  )
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
border:red solid 1px!important;
`
  