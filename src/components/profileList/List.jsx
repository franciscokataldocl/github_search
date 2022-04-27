import React, { useEffect, useState } from "react";
import { useSearch } from "../context/searchContext";
import Card from './Card';
import styled  from 'styled-components';
import Pagination from '../Pagination';



const List = () => {
  const { search } = useSearch();
  const [loading, setLoading] = useState(false);
    const [profiles, setProfiles] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [profilesPerpage, setProfilesPerPage] = useState(5)

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
    const indexOfLastProfile = currentPage * profilesPerpage;
    const indexOfFirstProfile = indexOfLastProfile - profilesPerpage;
    const currentProfiles = profiles.slice(indexOfFirstProfile, indexOfLastProfile);

    //cambiar de pagina
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    return (
      <>
        <Container>
          {currentProfiles &&
            currentProfiles.map((user) => (
              <Card key={user.login} user={user} />
            ))}
        </Container>
            <Pagination profilesPerpage={profilesPerpage} totalProfiles={profiles.length} paginate={paginate} />
      </>
    );
};

export default List;
const Container = styled.div`
display:flex;
justify-content: center;
align-items:center;
flex-wrap: wrap;

`
