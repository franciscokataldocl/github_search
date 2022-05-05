import React, { useEffect, useState } from "react";
import { useSearch } from "../context/searchContext";
import Card from './Card';
import styled  from 'styled-components';
// import Pagination from '../bak_Pagination';
import TotalAccount from './TotalAccount';
import Loading from '../loading/Loading';
// import ReactPaginate from 'react-paginate';
import Pagination from '../Pagination'








const List = () => {
  const { search } = useSearch();
  const [loading, setLoading] = useState(false);
    const [profiles, setProfiles] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [profilesPerpage, setProfilesPerPage] = useState(5);
 

    //console.log(profiles.length)

  const url = "https://api.github.com/search/users?q=";

  const getProfiles = async () => {
    if (search !== "") {
      setLoading(true);
        const response = await fetch(`${url}${search}`, {
          method: "GET",
          headers: {
            Authorization: `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`,
          },
        });
      const data = await response.json();
      if (data) {
          setProfiles(data.items);
          setLoading(false);
          console.log(data.items)
      }
    }
  };


  useEffect(() => {
    getProfiles();
  }, [search]);

    //get current profiles
    const indexOfLastProfile = currentPage * profilesPerpage; //15
    const indexOfFirstProfile = indexOfLastProfile - profilesPerpage; //0
    const currentProfiles = profiles.slice(indexOfFirstProfile, indexOfLastProfile); //0-15

    //cambiar de pagina
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    return (
      <>
      {loading ? <Loading/> :
      <>
      {profiles.length === 0 ? '' : <TotalAccount totalAccount={profiles.length}/>}
      
      <Container>
        {currentProfiles &&
          currentProfiles.map((user) => (
            <Card key={user.login} user={user} />
          ))}
      </Container>
          {/* <Pagination profilesPerpage={profilesPerpage} totalProfiles={profiles.length} paginate={paginate} /> */}
 <Pagination profilesPerpage={profilesPerpage}  totalProfiles={profiles.length} paginate={paginate}/>
      
      </>}
      </>
    );
};

export default List;
const Container = styled.div`
display:flex;
justify-content: center;
align-items:center;
flex-wrap: wrap;
@media (max-width: 768px) {
    flex-direction:column;
  }
`
