import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import { Row, Col } from 'reactstrap';
import axios from "axios";
import SearchForm from "./SearchForm";



export default function CharacterList() {
  const [data, setData] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [submitTerm, setSubmitTerm] = useState('')

  const BASE_URL=`https://rickandmortyapi.com/api/`;
  const PATH=`character/`;
  const QUERY=`name=`

  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  }

  // const checkSearch = (characterName) => {
  //   return (characterName.toLowerCase().includes(searchTerm.toLowerCase()))
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitTerm(searchTerm)
  }

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get(`https://cors-anywhere.herokuapp.com/${BASE_URL}${PATH}?${QUERY}${submitTerm}`)
    .then(res => setData(res.data.results))
    .catch(err => console.log("Error: ", err))
  }, [submitTerm]);

  return (
    <section className="container">
        <SearchForm onSubmit={handleSubmit} searchTerm={searchTerm} onChange={handleSearch}/>
        <Row>
          {data.map((character) => 
            <Col sm="4" key={character.id} >
              <CharacterCard character={character} />
            </Col>
          )}
        </Row>
    </section>
  );
}
