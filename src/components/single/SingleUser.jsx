import React, {useState, useEffect} from 'react';
import { useParams, useNavigate } from "react-router-dom";
import styled  from 'styled-components';
import Header from './Header';
import { FaLocationArrow, FaUserAlt, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";




const SingleUser = () => {
    const [loading, setLoading] = useState(true);
    const [profile, setProfile] = useState([]);

    const params = useParams();
    let url = `https://api.github.com/users/${params.id}`;

    const navigate = useNavigate();


     const getProfile = async () => {
         try {
             const response = await fetch(url);
             const data = await response.json();
             if (data) {
               setProfile(data);
                 setLoading(false);
                 console.log(data);
             }
         } catch (error) {
             console.log(error)
         }

     };

     useEffect(() => {
       getProfile();
     }, [params]);



  return (
    <Container>
      <BackButton
        as={motion.button}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        onClick={() => navigate(-1)}
      >
        volver
      </BackButton>
      <Header image={profile.avatar_url} name={profile.login} />
      <ProfileCard>
        <TitleBox
          as={motion.div}
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Title>{profile.bio}</Title>
        </TitleBox>
        <Button
          as={motion.button}
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          href={profile.html_url}
          className="btn btn-white"
        >
          Ir al perfil
        </Button>
        <List
          as={motion.ul}
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <li>
            <FaUserAlt color="var(--blue)" />

            <h3>Nombre</h3>
            <h4>@{profile.name}</h4>
          </li>
          <li>
            <FaLocationArrow color="var(--blue)" />
            <h3>Ciudad</h3>
            <h4>{profile.location}</h4>
          </li>
          <li>
            <FaTwitter color="var(--blue)" />

            <h3>Twitter</h3>
            <h4>@{profile.twitter_username}</h4>
          </li>
        </List>
      </ProfileCard>
    </Container>
  );
}

export default SingleUser;

const Container = styled.div`
width:80%;
margin:0 auto;
`
const BackButton = styled.button`
    position:absolute;
    top:5%;
    right:5%;
    background:var(--grey-3);
    border:none;
    border-radius: 100px;
    color:var(--white);
    font-size:1.1rem;
    padding: 10px 20px;
    &:hover{
    cursor:pointer;
    }
    @media (max-width: 768px) {
    z-index:2;
  }
`

const ProfileCard = styled.div`
background:var(--grey-1);
border-radius: 10px;
height:100%;
padding:4% 2%;
width:100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

`

const TitleBox = styled.div`
text-align:center;
`

const Title = styled.h2`

color:var(--white);
font-weight: 400;
font-size:1.2rem;
`;

const Button = styled.a`
  padding: 10px 20px !important;
  font-weight: 600;
  text-decoration: none;
  background: var(--blue) !important;
  color: var(--white) !important;
  margin-top: 30px;
  margin-bottom: 20px;
`;

const List = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding: 0;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  & li {
    background: var(--black);
    border-radius: 3px;
    min-width:150px;
    margin:10px;
    padding:3%;
    text-align:center;
    & h3 {
      color: var(--white);
      font-size:1rem;
      font-weight:600;
      text-transform: uppercase;
      margin-bottom:5px;
      margin-top:3px;
    }
    & h4{
      color: var(--grey-4);
    }
  }
`;