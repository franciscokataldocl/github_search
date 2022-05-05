import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';


const Card = ({ user }) => {
    const [extras, setExtras] = useState({
        repos: 0,
        followers: 0,
    });



    const getExtras = async () => {
      // setExtras((prev) => ({
      //   ...prev,
      //   repos: dataRepo.length,
      // }));
      const urlRepos = `https://api.github.com/users/${user.login}/repos`;
      const urlFollowers = `https://api.github.com/users/${user.login}/followers`;

      const [resRepos, resFollowers] = await Promise.all([
        fetch(urlRepos, {
          method: "GET",
          headers: {
            Authorization: `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`,
          },
        }),
        fetch(urlFollowers, {
          method: "GET",
          headers: {
            Authorization: `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`,
          },
        }),
      ]);

      const [reposData, followersData] = await Promise.all([
        resRepos.json(),
        resFollowers.json(),
      ]);

      //console.log(reposData.length, followersData.length);
      setExtras((prev) => ({
        ...prev,
        repos: reposData.length,
        followers: followersData.length,
      }));
    }

    useEffect(() => {
        getExtras();
    }, [user])



  return (
    <CardBox
      as={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <ImageContainer>
        <ImageCircle>
          <img src={user.avatar_url} alt="" />
        </ImageCircle>
      </ImageContainer>
      <Title>{user.login}</Title>
      <Extras>
        <Extra>
          <ExtraTitle>Score</ExtraTitle>
          <ExtraNumber>{user.score}</ExtraNumber>
        </Extra>
        {extras && extras.repo< 100 &&(
 <Extra>
 <ExtraTitle>Repos</ExtraTitle>


 <ExtraNumber>
            {extras.repos < 100 ? (
              <p>{extras.repos}</p>
            ) : (
              <p>{extras.repos} +</p>
            )}
          </ExtraNumber>

 </Extra>
        ) }
       
       {extras && extras.followers < 100 && (
        <Extra>
          <ExtraTitle>Followers</ExtraTitle>
          <ExtraNumber>
            {extras.followers < 100 ? (
              <p>{extras.followers}</p>
            ) : (
              <p>{extras.followers} +</p>
            )}
          </ExtraNumber>
        </Extra>
       )}
        
        
      </Extras>
      <ButtonContainer>
        <Link to={`/${user.login}`} className="btn btn-white">
          VER PERFIL
        </Link>
      </ButtonContainer>
    </CardBox>
  );
}

export default Card;

const CardBox = styled.div`
border-radius: 20px;
background:var(--blue);
width:30%;
max-width:250px;
height:200px;
margin:3%;
@media (max-width: 768px) {
   width:90%;
   margin-bottom:20%;
  }
`

const ImageCircle = styled.div`
  border-radius: 100px;
  overflow: hidden;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: var(--blue-dark) 0px 8px 24px;
  background:var(--white);
  & img {
    width: 60px;
    height: 60px;
  }
  @media (max-width: 768px) {
    width: 80px;
  height: 80px;
  & img {
    width: 80px;
  height: 80px;
  }
  }
  
`;

const ImageContainer = styled.div`
width:100%;
display:flex;
justify-content: center;
margin-top:-20px;
margin-bottom:20px;
`

const Title = styled.h2`
font-size:1.5rem;
font-weight: 500;
color:var(--white);
text-align:center;
`

const Extras = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  margin:0 auto;
  margin-top:10%;
  justify-content: space-evenly;

`;
const Extra = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ExtraTitle = styled.h3`
color:var(--grey-4);
font-weight:400;
font-size:1rem;

`;

const ExtraNumber = styled.h4`
  color: var(--white);
  font-weight: 400;
  font-size: 1.2rem;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top:45px;
  @media (max-width: 768px) {
    margin-top:20px;
  }
`;