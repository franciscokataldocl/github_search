import React from 'react';
import styled from 'styled-components';
import { useSearch } from '../context/searchContext';
import { motion } from "framer-motion";


const SearchForm = () => {

  const {setSearch } = useSearch();

  const handleInput = (e) => {

    setSearch('');
    let value = e.target.value;
    if (value.length >= 4) {
      setTimeout(() => {
        setSearch(e.target.value);
      }, 2000);
    }

}


  return (
    <Form
      as={motion.div}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <Input type="text" placeholder="Busca un perfil de github" onChange={handleInput} />
    </Form>
  );
}

export default SearchForm;

const Form = styled.form`
width:auto;
margin:0 auto;
z-index:1;
position:relative;
`

const Input = styled.input`
  border-radius: 5px;
  width: 100%;
  min-width: 400px;
  padding: 4% 5%;
  border: none;
  box-shadow: var(--grey-1) 0px 8px 24px;
  background:var(--white);
  font-size:1.3rem;
  font-weight:200!important;
  color:var(--black);
`;
